"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Stripe from "stripe";

export async function getUserSubscription() {
  try {
    let sub = await prisma.userSubscription.findUnique({
      where: { id: "local-user" }
    });

    if (!sub) {
      sub = await prisma.userSubscription.create({
        data: {
          id: "local-user",
          tier: "free"
        }
      });
    }

    return { success: true, tier: sub.tier };
  } catch (error: any) {
    console.error("Error fetching subscription:", error);
    return { success: false, tier: "free", error: error.message };
  }
}

export async function processSimulatedPayment(amount: number) {
  try {
    const transactionId = `sim_tx_${Date.now()}`;
    
    // Log the transaction
    await prisma.paymentLog.create({
      data: {
        transactionId,
        provider: "simulated",
        amount,
        currency: "USD",
        status: "completed"
      }
    });

    // Upgrade the user to pro
    const sub = await prisma.userSubscription.upsert({
      where: { id: "local-user" },
      update: { tier: "pro" },
      create: { id: "local-user", tier: "pro" }
    });

    // Revalidate paths so UI updates globally
    revalidatePath("/", "layout");

    return { success: true, transactionId, tier: sub.tier };
  } catch (error: any) {
    console.error("Error processing payment:", error);
    return { success: false, error: error.message };
  }
}

export async function logPaymentAndUpgradeTier(payload: {
  transactionId: string;
  provider: string;
  amount: number;
  currency: string;
  status: string;
  rawResponseJson?: string;
}) {
  try {
    // Log the transaction from gateway
    await prisma.paymentLog.create({
      data: {
        transactionId: payload.transactionId,
        provider: payload.provider,
        amount: payload.amount,
        currency: payload.currency,
        status: payload.status,
        rawResponseJson: payload.rawResponseJson
      }
    });

    // Upgrade the user to pro
    const sub = await prisma.userSubscription.upsert({
      where: { id: "local-user" },
      update: { tier: "pro" },
      create: { id: "local-user", tier: "pro" }
    });

    revalidatePath("/", "layout");
    
    return { success: true, tier: sub.tier };
  } catch (error: any) {
    console.error("Error in logPaymentAndUpgradeTier:", error);
    return { success: false, error: error.message };
  }
}

export async function createStripeCheckoutSession(amount: number) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      // Graceful fallback for test environments without real Stripe keys
      console.warn("No STRIPE_SECRET_KEY found. Simulating Stripe Checkout.");
      return { 
        success: true, 
        simulated: true,
        clientSecret: "sim_client_secret_test",
      };
    }

    const stripe = new Stripe(stripeKey, {
      apiVersion: "2026-06-24.dahlia"
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Synchroglyph Pro Upgrade",
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      return_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/upgrade/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    return { success: true, clientSecret: session.client_secret };
  } catch (error: any) {
    console.error("Error creating Stripe session:", error);
    return { success: false, error: error.message };
  }
}
