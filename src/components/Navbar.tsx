import React, { useState } from 'react';
import { Heart, Send, Settings, Share2, Menu, X } from 'lucide-react';
import type { WeddingDetails } from '../types';

interface NavbarProps {
  details: WeddingDetails;
  onOpenRsvp: () => void;
  onOpenShare: () => void;
  onOpenConfig: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ details, onOpenRsvp, onOpenShare, onOpenConfig }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-4 py-3">
      <div className="max-w-6xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-2xl border border-amber-500/30">
        {/* Brand/Couple Names */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-script text-2xl md:text-3xl text-amber-300 group-hover:text-amber-200 transition-colors">
            {details.groomName}
          </span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
          <span className="font-script text-2xl md:text-3xl text-amber-300 group-hover:text-amber-200 transition-colors">
            {details.brideName}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-amber-200/80">
          <button onClick={() => scrollTo('story')} className="hover:text-amber-300 transition-colors">
            Family & Journey
          </button>
          <button onClick={() => scrollTo('events')} className="hover:text-amber-300 transition-colors">
            Events & Venues
          </button>
          <button onClick={() => scrollTo('wishes')} className="hover:text-amber-300 transition-colors">
            Blessings Board
          </button>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenShare}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-400/30 transition-all"
            title="Create Custom WhatsApp Invite Link"
          >
            <Share2 className="w-3.5 h-3.5" />
            Share Invitation
          </button>

          <button
            onClick={onOpenRsvp}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-amber-950 font-bold text-xs shadow-lg transition-all hover:scale-105"
          >
            <Send className="w-3.5 h-3.5" />
            RSVP
          </button>

          <button
            onClick={onOpenConfig}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-amber-300/80 hover:text-amber-200 transition-colors"
            title="Edit Details"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenShare}
            className="p-2 rounded-full bg-amber-500/20 text-amber-300"
            title="Share"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-amber-300 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-2 max-w-6xl mx-auto glass-panel rounded-2xl p-5 space-y-4 border border-amber-500/30 animate-fade-in">
          <div className="flex flex-col gap-3 text-center font-medium text-amber-200">
            <button onClick={() => scrollTo('story')} className="py-2 border-b border-white/5">
              Family & Journey
            </button>
            <button onClick={() => scrollTo('events')} className="py-2 border-b border-white/5">
              Events & Venues
            </button>
            <button onClick={() => scrollTo('wishes')} className="py-2 border-b border-white/5">
              Blessings Board
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenRsvp();
              }}
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 font-bold text-sm shadow-md"
            >
              RSVP Now
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConfig();
              }}
              className="p-2.5 rounded-full bg-white/10 text-amber-300"
              title="Edit Details"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
