import React, { useState } from 'react';
import { X, Save, Settings } from 'lucide-react';
import type { WeddingDetails } from '../types';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: WeddingDetails;
  onSave: (updated: WeddingDetails) => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({ isOpen, onClose, details, onSave }) => {
  const [formData, setFormData] = useState<WeddingDetails>(details);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl glass-card rounded-3xl p-6 sm:p-8 border-2 border-amber-500/40 shadow-2xl gold-glow animate-fade-in space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-amber-200 hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-1">
          <span className="text-xs font-cinzel tracking-widest text-amber-400 uppercase font-semibold">
            ✦ LIVE WEBSITE CUSTOMIZER ✦
          </span>
          <h3 className="text-2xl font-serif-royal font-bold text-amber-200 flex items-center justify-center gap-2">
            <Settings className="w-5 h-5 text-amber-400" />
            Customize Wedding Details
          </h3>
          <p className="text-xs text-amber-100/70">
            Edit groom & bride names, dates, venue, and background audio anytime!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-amber-200/80 mb-1">
                Groom Name *
              </label>
              <input
                type="text"
                required
                value={formData.groomName}
                onChange={(e) => setFormData({ ...formData, groomName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-amber-200/80 mb-1">
                Bride Name *
              </label>
              <input
                type="text"
                required
                value={formData.brideName}
                onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-amber-200/80 mb-1">
                Groom Parents / Title
              </label>
              <input
                type="text"
                value={formData.groomFamily}
                onChange={(e) => setFormData({ ...formData, groomFamily: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-amber-200/80 mb-1">
                Bride Parents / Title
              </label>
              <input
                type="text"
                value={formData.brideFamily}
                onChange={(e) => setFormData({ ...formData, brideFamily: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-amber-200/80 mb-1">
              Wedding Date & Time (ISO format) *
            </label>
            <input
              type="datetime-local"
              required
              value={formData.weddingDate.slice(0, 16)}
              onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#1d0d29] border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-amber-200/80 mb-1">
                Reception Date & Time Text
              </label>
              <input
                type="text"
                value={formData.receptionDate}
                onChange={(e) => setFormData({ ...formData, receptionDate: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-amber-200/80 mb-1">
                Muhurtham Date & Time Text
              </label>
              <input
                type="text"
                value={formData.muhurthamDate}
                onChange={(e) => setFormData({ ...formData, muhurthamDate: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-amber-200/80 mb-1">
              Venue Name
            </label>
            <input
              type="text"
              value={formData.venueName}
              onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-amber-200/80 mb-1">
              Venue Address
            </label>
            <input
              type="text"
              value={formData.venueAddress}
              onChange={(e) => setFormData({ ...formData, venueAddress: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-amber-200/80 mb-1">
              Background Audio BGM MP3 URL
            </label>
            <input
              type="text"
              value={formData.bgmAudioUrl}
              onChange={(e) => setFormData({ ...formData, bgmAudioUrl: e.target.value })}
              placeholder="https://...mp3"
              className="w-full px-3 py-2 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-amber-950 font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
            >
              <Save className="w-4 h-4" />
              Save & Apply Details
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
