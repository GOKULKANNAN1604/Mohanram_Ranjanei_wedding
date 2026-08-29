import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, User, Phone, Send } from 'lucide-react';
import type { RsvpData } from '../types';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<RsvpData>({
    name: '',
    phone: '',
    attending: 'yes',
    guestCount: 1,
    diet: 'veg',
    wishes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Save to local storage for local persistence
    const existing = JSON.parse(localStorage.getItem('wedding_rsvp_list') || '[]');
    localStorage.setItem('wedding_rsvp_list', JSON.stringify([...existing, formData]));

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 border-2 border-amber-500/40 shadow-2xl gold-glow animate-fade-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-amber-200 hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs font-cinzel tracking-widest text-amber-400 uppercase font-semibold">
                ✦ PLEASE CONFIRM YOUR PRESENCE ✦
              </span>
              <h3 className="text-2xl font-serif-royal font-bold text-amber-200">
                Wedding RSVP
              </h3>
              <p className="text-xs text-amber-100/70">
                Help us make seating and feast arrangements for you & family!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-amber-200/80 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-amber-400/60" />
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-amber-200/80 mb-1">
                  Mobile Number / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-amber-400/60" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-amber-200/80 mb-1">
                    Will You Attend?
                  </label>
                  <select
                    value={formData.attending}
                    onChange={(e) => setFormData({ ...formData, attending: e.target.value as any })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#1c0c29] border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                  >
                    <option value="yes">Yes, Joyfully Attending!</option>
                    <option value="no">Sorry, Unable to Attend</option>
                    <option value="maybe">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-amber-200/80 mb-1">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) || 1 })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-amber-200/80 mb-1">
                  Food Preference
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, diet: 'veg' })}
                    className={`py-2 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      formData.diet === 'veg'
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'bg-white/5 border-amber-500/20 text-amber-200/60'
                    }`}
                  >
                    🌱 Pure Veg Traditional
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, diet: 'non-veg' })}
                    className={`py-2 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      formData.diet === 'non-veg'
                        ? 'bg-rose-500/20 border-rose-400 text-rose-300'
                        : 'bg-white/5 border-amber-500/20 text-amber-200/60'
                    }`}
                  >
                    🍗 Multi-Cuisine / Non-Veg
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-amber-950 font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" />
                Submit RSVP Confirmation
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="text-2xl font-serif-royal font-bold text-amber-200">
              RSVP Confirmed!
            </h3>
            <p className="text-sm text-amber-100/80 max-w-sm mx-auto">
              Thank you, <strong>{formData.name}</strong>! We are thrilled to celebrate our special day with you and your family!
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-amber-500 text-amber-950 font-bold text-xs shadow-md"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
