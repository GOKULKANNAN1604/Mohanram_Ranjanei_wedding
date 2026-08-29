import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Volume2 } from 'lucide-react';
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
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0d0512] px-4 overflow-hidden transition-all duration-[1200ms] ${isOpening ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-rose-600/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Royal Invitation Card Envelope Container */}
      <div className={`relative w-full max-w-lg transition-all duration-[1200ms] transform ${isOpening ? '-translate-y-16 scale-105' : ''}`}>
        {/* Decorative Top Banner */}
        <div className="text-center mb-6 animate-fade-in">

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
          className="relative bg-gradient-to-br from-[#380924] via-[#1a0518] to-[#0a0109] border border-amber-500/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] gold-glow transition-all duration-700 overflow-hidden hover:scale-[1.02]"
        >
          {/* Subtle Background Texture/Pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
          
          {/* Double Inner Border Frame */}
          <div className="absolute inset-2 border border-amber-500/20 rounded-xl pointer-events-none" />
          <div className="absolute inset-3 border border-amber-400/40 rounded-lg pointer-events-none" />
          {/* Top Envelope Flap Triangle Decorative SVG */}
          <div className="absolute -top-1 left-0 right-0 h-16 bg-gradient-to-b from-amber-500/20 to-transparent rounded-t-2xl pointer-events-none" />
          
          {/* Elegant Corner Flourishes (SVG) */}
          <svg className="absolute top-2 left-2 w-10 h-10 text-amber-400/60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M 10 90 L 10 10 L 90 10" />
            <path d="M 20 80 L 20 20 L 80 20" />
            <circle cx="20" cy="20" r="4" fill="currentColor" stroke="none" />
          </svg>
          <svg className="absolute top-2 right-2 w-10 h-10 text-amber-400/60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" transform="scale(-1, 1)">
            <path d="M 10 90 L 10 10 L 90 10" />
            <path d="M 20 80 L 20 20 L 80 20" />
            <circle cx="20" cy="20" r="4" fill="currentColor" stroke="none" />
          </svg>
          <svg className="absolute bottom-2 left-2 w-10 h-10 text-amber-400/60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" transform="scale(1, -1)">
            <path d="M 10 90 L 10 10 L 90 10" />
            <path d="M 20 80 L 20 20 L 80 20" />
            <circle cx="20" cy="20" r="4" fill="currentColor" stroke="none" />
          </svg>
          <svg className="absolute bottom-2 right-2 w-10 h-10 text-amber-400/60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" transform="scale(-1, -1)">
            <path d="M 10 90 L 10 10 L 90 10" />
            <path d="M 20 80 L 20 20 L 80 20" />
            <circle cx="20" cy="20" r="4" fill="currentColor" stroke="none" />
          </svg>

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
            <div className="pt-6 pb-2 flex flex-col items-center justify-center">
              <button
                onClick={handleOpenInvitation}
                disabled={isOpening}
                className="group relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-rose-700 via-red-800 to-rose-950 border-[3px] border-amber-400/80 shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-500 hover:scale-110 active:scale-95 z-10"
              >
                {/* Wax seal inner dashed ring */}
                <div className="absolute inset-1.5 border border-amber-300/40 rounded-full border-dashed pointer-events-none" />
                {/* Wax seal inner solid ring */}
                <div className="absolute inset-[10px] border border-amber-400/30 rounded-full pointer-events-none" />
                
                {/* Icon inside seal */}
                <div className="relative flex flex-col items-center transform transition-transform duration-500 group-hover:rotate-6">
                  <Heart className="w-7 h-7 text-amber-300 fill-amber-300 drop-shadow-md" />
                  <span className="text-[7.5px] font-cinzel tracking-widest text-amber-200 mt-1.5 uppercase font-bold shadow-black drop-shadow-md">
                    Open
                  </span>
                </div>
                
                {/* Highlight gleam on seal */}
                <div className="absolute top-1 left-2 w-8 h-4 bg-white/20 rounded-full blur-[2px] -rotate-45 pointer-events-none" />
              </button>

              <p className="mt-6 text-[11px] text-amber-300/50 flex items-center justify-center gap-2 font-light tracking-wide animate-pulse">
                <Volume2 className="w-3.5 h-3.5" /> Tap seal to open with music
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
