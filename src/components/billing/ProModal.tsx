"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, X, CheckCircle2, Zap, DownloadCloud, Layers, CreditCard } from "lucide-react";
import { PaymentEngine } from "@/lib/payment";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function ProModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-pro-modal", handleOpen);
    return () => window.removeEventListener("open-pro-modal", handleOpen);
  }, []);

  const handlePromoSubmit = async () => {
    if (promoCode !== "SYNCHROGLYPH-PRO-TEST") {
      toast.error("Invalid promo code");
      return;
    }
    
    setIsProcessing(true);
    toast.info("Activating via Promo Code...");
    
    const res = await PaymentEngine.simulateProUpgrade();
    
    setIsProcessing(false);
    
    if (res.success) {
      toast.success("Upgrade Successful! Welcome to Pro.");
      setIsOpen(false);
      // Trigger a global event so other components know tier changed
      window.dispatchEvent(new Event("subscription-updated"));
      router.refresh();
    } else {
      toast.error(res.error || "Payment failed");
    }
  };

  const handleRazorpayCheckout = async () => {
    setIsProcessing(true);
    const res: any = await PaymentEngine.triggerRazorpayCheckout(499.00, "INR");
    setIsProcessing(false);
    
    if (res.success) {
      toast.success("Razorpay Payment Successful! Welcome to Pro.");
      setIsOpen(false);
      window.dispatchEvent(new Event("subscription-updated"));
      router.refresh();
    } else {
      toast.error(res.error || "Payment failed or was cancelled");
    }
  };

  const handleStripeCheckout = async () => {
    setIsProcessing(true);
    const res: any = await PaymentEngine.triggerStripeCheckout(9.99, "USD");
    setIsProcessing(false);
    
    if (res.success) {
      toast.success("Stripe Payment Successful! Welcome to Pro.");
      setIsOpen(false);
      window.dispatchEvent(new Event("subscription-updated"));
      router.refresh();
    } else {
      toast.error(res.error || "Stripe session failed");
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md" 
      style={{ zIndex: 99999 }}
    >
      
      {/* AMOLED Black card with border-cyan-500/40 */}
      <div 
        className="relative w-[90%] md:w-full bg-black border border-cyan-500/40 rounded-3xl p-6 md:p-8 shadow-[0_0_60px_rgba(0,240,255,0.25)] overflow-hidden flex flex-col"
        style={{ maxWidth: '480px' }}
      >
        
        {/* Neon Aura */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
        
        <div className="relative z-10 flex items-start justify-between mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              SYNCHROGLYPH PRO
            </div>
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Unlock Limitless</h2>
            <p className="text-sm text-neutral-400">Supercharge your video analysis workspace with unlimited processing and advanced neural features.</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-neutral-500 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative z-10 space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-200">Unlimited AI Summaries & Flashcards</h4>
              <p className="text-xs text-slate-500 mt-1">Bypass the daily API limits for all transcript extractions.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-200">High-Quality Male & Female Voice Synthesis</h4>
              <p className="text-xs text-slate-500 mt-1">Access premium Neural TTS models instantly.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DownloadCloud className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-200">Bulk Transcripts Export (TXT, JSON, SRT)</h4>
              <p className="text-xs text-slate-500 mt-1">Export 50+ transcripts simultaneously.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Layers className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-200">100% Offline Local Privacy</h4>
              <p className="text-xs text-slate-500 mt-1">Your SQLite database never leaves your local machine.</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-3">
          <button 
            onClick={handleRazorpayCheckout}
            disabled={isProcessing}
            className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-[1.02] flex items-center justify-center gap-2 text-sm whitespace-normal leading-tight px-4 text-center"
          >
            <CreditCard className="w-4 h-4 shrink-0" />
            {isProcessing ? "Processing..." : "Pay via Razorpay (UPI, NetBanking, INR Cards)"}
          </button>
          
          <button 
            onClick={handleStripeCheckout}
            disabled={isProcessing}
            className="w-full py-3 rounded-xl bg-[#635BFF] hover:bg-[#7A73FF] text-white font-bold tracking-wide transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,91,255,0.3)] text-sm whitespace-normal leading-tight px-4 text-center"
          >
            <CreditCard className="w-4 h-4 shrink-0" />
            {isProcessing ? "Processing..." : "Pay via Stripe (International Credit Cards, USD)"}
          </button>
          
          <div className="flex gap-2 mt-2">
            <input 
              type="text" 
              placeholder="Promo Code" 
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1 bg-black border border-cyan-900/40 rounded-2xl px-5 py-3 text-cyan-400 text-sm focus:outline-none focus:border-cyan-500/80 transition-colors"
            />
            <button 
              onClick={handlePromoSubmit}
              disabled={isProcessing || !promoCode}
              className="px-6 bg-[#0a1518] hover:bg-cyan-950/60 text-cyan-400 rounded-2xl border border-cyan-900/40 text-sm font-semibold transition-all hover:border-cyan-500/50"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
