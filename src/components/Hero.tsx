import React from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Sparkles, Heart } from 'lucide-react';
import type { WeddingDetails } from '../types';
import { Countdown } from './Countdown';

const BASE = import.meta.env.BASE_URL;

interface HeroProps {
  details: WeddingDetails;
  guestName: string;
  onOpenRsvp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ details, guestName, onOpenRsvp }) => {
  const triggerCelebration = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#f59e0b', '#ef4444', '#ec4899', '#ffffff', '#fbbf24']
    });
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 px-4 md:pt-36 md:pb-24 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-600/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-20 space-y-8">
        
        {/* Dynamic Guest Greeting Badge */}
        {guestName && (
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-amber-500/20 border border-amber-400/40 text-amber-200 text-sm md:text-base font-semibold shadow-lg backdrop-blur-md animate-bounce">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Welcome, <strong>{guestName} & Family!</strong></span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
        )}

        {/* Subtitle / Traditional Blessing Mantra */}
        <div className="space-y-2">
          <p className="text-amber-400 font-cinzel text-xs md:text-sm tracking-[0.3em] uppercase font-semibold">
            ✦ Save The Date For The Grand Celebration ✦
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-script text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 drop-shadow-md py-2">
            {details.groomName} & {details.brideName}
          </h1>
          <p className="text-rose-300/90 font-serif-royal italic text-base md:text-xl">
            "Two Families United by Traditions, Destined by Hearts"
          </p>
        </div>

        {/* Couple Hero Photo Frame */}
        <div className="relative max-w-2xl mx-auto my-6">
          <div className="relative rounded-3xl overflow-hidden border-4 border-amber-500/40 p-2 glass-panel gold-glow">
            <img
              src={details.coupleImg || `${BASE}couple.jpg`}
              alt={`${details.groomName} & ${details.brideName}`}
              className="w-full h-[320px] sm:h-[450px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0714] via-transparent to-transparent opacity-80" />

            {/* Floating Date Badge inside image */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-panel px-6 py-3 rounded-full border border-amber-400/50 flex items-center gap-3 text-amber-200 text-sm md:text-base font-semibold shadow-xl">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{new Date(details.weddingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
        </div>

        {/* Real-time Countdown Timer */}
        <div className="pt-4 space-y-4">
          <p className="text-amber-300/80 font-cinzel text-xs tracking-widest uppercase">
            Countdown To The Auspicious Moment
          </p>
          <Countdown targetDate={details.weddingDate} />
        </div>

        {/* Hero Quick Action Buttons */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={triggerCelebration}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-amber-950 font-bold text-sm shadow-xl hover:shadow-amber-500/30 transition-all hover:scale-105 border border-amber-300/40"
          >
            <Sparkles className="w-4 h-4 text-amber-950 fill-amber-950" />
            Send Showers & Confetti 🎊
          </button>

          <button
            onClick={onOpenRsvp}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full glass-panel border border-amber-400/40 hover:border-amber-400 text-amber-200 font-bold text-sm transition-all hover:scale-105"
          >
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            Submit RSVP
          </button>
        </div>

      </div>
    </section>
  );
};
