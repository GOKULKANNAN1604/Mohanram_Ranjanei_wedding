import React, { useState } from 'react';
import { X, Copy, Check, MessageSquare, Sparkles } from 'lucide-react';
import type { WeddingDetails } from '../types';

interface ShareLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: WeddingDetails;
}

export const ShareLinkModal: React.FC<ShareLinkModalProps> = ({ isOpen, onClose, details }) => {
  const [recipientName, setRecipientName] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentOrigin = window.location.origin + window.location.pathname;
  const guestQuery = recipientName.trim() ? `?guest=${encodeURIComponent(recipientName.trim())}` : '';
  const finalInviteUrl = `${currentOrigin}${guestQuery}`;

  const greetingHeader = recipientName.trim()
    ? `Dear ${recipientName.trim()} & Family, ✨`
    : `Dear Family and Friends, ✨`;

  const defaultMsg = `${greetingHeader}
Together with our families, we are absolutely thrilled to share some wonderful news with you! As we step into a new chapter, we would be honored to have you by our side.
Your love and blessings have always meant the world to us, and our celebrations simply wouldn't be the same without you there.

❤️ *${details.groomName} & ${details.brideName}* ❤️

Please save the dates and join us:

💍 *ENGAGEMENT*
• *Time:* ${details.engagementDate || 'Sep 12, 6:00 PM onwards'}
• *Venue:* ${details.engagementVenue || 'Pushpam Mahal, Trichy'}
• *Map:* ${details.engagementMapUrl || 'https://maps.app.goo.gl/XT2YY8Q51STpZKXSA'}

💒 *WEDDING*
• *Time:* ${details.muhurthamDate || 'Sep 13, 8:45 AM to 10:15 AM'}
• *Venue:* ${details.weddingVenue || 'Kamalavalli Nachiyar Kovil, Woraiyur, Trichy'}
• *Map:* ${details.weddingMapUrl || 'https://maps.app.goo.gl/Eu8XeGKM5Gze7BGa9'}

🎉 *RECEPTION*
• *Time:* ${details.receptionDate || 'Sep 20, 6:30 PM to 9:30 PM'}
• *Venue:* ${details.receptionVenue || 'Anjappar, Porur, Chennai'}
• *Map:* ${details.receptionMapUrl || 'https://maps.app.goo.gl/qqkpDewn6E7VKfag8'}

Please view your personalized digital invitation card here:
👉 ${finalInviteUrl}

We look forward to welcoming you and creating beautiful memories together. Please consider this our personal invitation!
With love,
*${details.groomName}, ${details.brideName}, & Families* 🙏`;

  const handleCopy = () => {
    navigator.clipboard.writeText(finalInviteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(defaultMsg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 border-2 border-amber-500/40 shadow-2xl gold-glow animate-fade-in space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-amber-200 hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" /> WhatsApp Invitation Generator
          </div>
          <h3 className="text-2xl font-serif-royal font-bold text-amber-200">
            Share Digital Invitation
          </h3>
          <p className="text-xs text-amber-100/70">
            Type guest's name to generate custom invitation link for friends & family!
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-amber-200/80 mb-1">
              Recipient Guest / Family Name
            </label>
            <input
              type="text"
              placeholder="e.g. Rajesh Bro & Family, Anitha Akka"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 placeholder-amber-200/30 text-sm focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Generated Shareable URL */}
          <div>
            <label className="block text-xs font-medium text-amber-200/80 mb-1">
              Personalized Web Link
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={finalInviteUrl}
                className="w-full px-3 py-2 rounded-xl bg-[#170a1f] border border-amber-500/30 text-amber-300 text-xs font-mono truncate"
              />
              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold border border-amber-400/40 flex items-center gap-1.5 shrink-0 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Message Preview */}
          <div>
            <label className="block text-xs font-medium text-amber-200/80 mb-1">
              WhatsApp Invitation Preview
            </label>
            <div className="p-3 rounded-xl bg-[#12081a] border border-white/10 text-amber-100/80 text-xs leading-relaxed whitespace-pre-line font-sans max-h-36 overflow-y-auto">
              {defaultMsg}
            </div>
          </div>

          {/* WhatsApp Share Button */}
          <button
            onClick={handleWhatsAppShare}
            className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            Send Invitation on WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
};
