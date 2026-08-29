import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Volume2 } from 'lucide-react';
import type { WeddingDetails } from '../types';

interface EnvelopeProps {
  details: WeddingDetails;
  guestName: string;
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ details, guestName, onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpening(true);
    
    // Fire festive celebration confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ca8a04', '#eab308', '#ec4899', '#ef4444', '#ffffff']
    });

    setTimeout(() => {
      setIsOpen(true);
      onOpen();
    }, 1200);
  };

  if (isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0512] px-4 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-rose-600/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Royal Invitation Card Envelope Container */}
      <div className="relative w-full max-w-lg transition-all duration-1000 transform">
        {/* Decorative Top Banner */}
        <div className="text-center mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Digital Wedding Invitation
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>

          {guestName ? (
            <div className="mt-2 space-y-1">
              <p className="text-amber-200/80 text-sm font-medium">Warm Welcome To</p>
              <h2 className="text-2xl md:text-3xl font-serif-royal font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 drop-shadow-sm">
                {guestName} & Family
              </h2>
            </div>
          ) : (
            <p className="text-amber-200/90 text-base font-light italic">
              You are cordially invited to celebrate our special day!
            </p>
          )}
        </div>

        {/* Outer Envelope Card Box */}
        <div 
          className={`relative bg-gradient-to-b from-[#2a1334] to-[#170a1f] border-2 border-amber-500/40 rounded-2xl p-8 shadow-2xl gold-glow transition-all duration-700 ${
            isOpening ? 'scale-105 opacity-0 -translate-y-12' : 'hover:scale-[1.02]'
          }`}
        >
          {/* Top Envelope Flap Triangle Decorative SVG */}
          <div className="absolute -top-1 left-0 right-0 h-16 bg-gradient-to-b from-amber-500/20 to-transparent rounded-t-2xl pointer-events-none" />
          
          {/* Gold Filigree Corner Borders */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-400/60 rounded-tl-lg" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-400/60 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-400/60 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-400/60 rounded-br-lg" />

          {/* Card Content */}
          <div className="text-center py-6 px-2 space-y-5">
            <div className="text-xs tracking-[0.3em] font-cinzel text-amber-400 uppercase font-semibold">
              TOGETHER WITH THEIR FAMILIES
            </div>

            <div className="py-2">
              <h1 className="text-4xl md:text-5xl font-script text-amber-300 drop-shadow-md">
                {details.groomName}
              </h1>
              <div className="my-2 flex items-center justify-center gap-3">
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-script text-amber-300 drop-shadow-md">
                {details.brideName}
              </h1>
            </div>

            <p className="text-xs md:text-sm text-amber-100/70 font-light max-w-sm mx-auto leading-relaxed">
              Invite you to share in their joy as they unite in holy matrimony on next month's auspicious day.
            </p>

            {/* Interactive Wax Seal Button */}
            <div className="pt-4">
              <button
                onClick={handleOpenInvitation}
                disabled={isOpening}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-amber-95 font-bold tracking-wider uppercase text-sm shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 active:scale-95 border border-amber-300/40"
              >
                <span className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center border border-amber-300/50 group-hover:rotate-12 transition-transform">
                  <Volume2 className="w-4 h-4 text-amber-200" />
                </span>
                <span>{isOpening ? 'Opening Invitation...' : 'Open Invitation'}</span>
                <Heart className="w-4 h-4 text-amber-200 fill-amber-200 group-hover:scale-125 transition-transform" />
              </button>

              <p className="mt-3 text-[11px] text-amber-300/50 flex items-center justify-center gap-1.5">
                <span>🎵</span> Tap to open with sweet music BGM & celebrations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
