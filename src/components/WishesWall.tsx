import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Send, Sparkles } from 'lucide-react';
import type { WishItem } from '../types';

export const WishesWall: React.FC = () => {
  const [wishes, setWishes] = useState<WishItem[]>([]);
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('Colleague / Friend');
  const [message, setMessage] = useState('');

  // Initial preset warm blessings from colleagues & friends
  const defaultWishes: WishItem[] = [
    {
      id: '1',
      name: 'Venkatesh & Office Team',
      relation: 'Colleagues',
      message: 'Wishing our dear colleague & your partner a joyful married life filled with endless happiness, prosperity, and love!',
      timestamp: '2 hours ago',
      likes: 14,
    },
    {
      id: '2',
      name: 'Anitha Ramesh',
      relation: 'Family Friend',
      message: 'Hearty congratulations! May Lord Venkateswara bless both of you with health, wealth, and traditional harmony.',
      timestamp: '5 hours ago',
      likes: 9,
    },
    {
      id: '3',
      name: 'Karthik & Tech Gang',
      relation: 'Friends',
      message: 'Super happy for you bro! Looking forward to attending the grand reception feast! Party time! 🎉',
      timestamp: '1 day ago',
      likes: 21,
    },
  ];

  useEffect(() => {
    const saved = localStorage.getItem('wedding_wishes_list');
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch (e) {
        setWishes(defaultWishes);
      }
    } else {
      setWishes(defaultWishes);
    }
  }, []);

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: WishItem = {
      id: Date.now().toString(),
      name: name.trim(),
      relation: relation || 'Friend',
      message: message.trim(),
      timestamp: 'Just now',
      likes: 1,
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('wedding_wishes_list', JSON.stringify(updated));

    setName('');
    setMessage('');

    // Heart celebration confetti blast
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ef4444', '#ec4899', '#f59e0b', '#ffffff']
    });
  };

  const handleLike = (id: string) => {
    const updated = wishes.map((item) =>
      item.id === id ? { ...item, likes: item.likes + 1 } : item
    );
    setWishes(updated);
    localStorage.setItem('wedding_wishes_list', JSON.stringify(updated));
  };

  return (
    <section id="wishes" className="py-20 px-4 relative z-20">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-cinzel tracking-[0.3em] text-amber-400 uppercase font-semibold">
            ✦ BLESSINGS & BEST WISHES ✦
          </span>
          <h2 className="text-4xl md:text-5xl font-serif-royal font-bold text-amber-200">
            Wishes Board & Guestbook
          </h2>
          <p className="text-xs md:text-sm text-amber-200/70">
            Leave your warm blessings and love for the couple!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
        </div>

        {/* Input Form & Feed Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Post New Wish Form */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 border border-amber-500/30 gold-glow space-y-4 h-fit">
            <h3 className="text-xl font-serif-royal font-bold text-amber-200 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Write Your Blessing
            </h3>

            <form onSubmit={handleAddWish} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-amber-200/80 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senthil Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 placeholder-amber-200/30 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-amber-200/80 mb-1">
                  Relation / Group
                </label>
                <select
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1d0d29] border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="Office Colleague">Office Colleague</option>
                  <option value="Close Friend">Close Friend</option>
                  <option value="Family Member">Family Member</option>
                  <option value="Relative">Relative</option>
                  <option value="Well Wisher">Well Wisher</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-amber-200/80 mb-1">
                  Your Message & Blessing *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="e.g. Wishing you both a happy married life filled with laughter and traditional joy!"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-amber-500/30 text-amber-100 placeholder-amber-200/30 text-sm focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-amber-950 font-bold text-sm shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <Send className="w-4 h-4" />
                Post Blessing
              </button>
            </form>
          </div>

          {/* Wishes List Feed */}
          <div className="lg:col-span-7 space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="glass-panel p-5 rounded-2xl border border-amber-500/20 space-y-3 hover:border-amber-400/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 font-bold text-sm">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-200 text-sm">
                        {item.name}
                      </h4>
                      <span className="text-[11px] text-amber-300/60 font-medium">
                        {item.relation} • {item.timestamp}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs border border-rose-500/30 transition-colors"
                  >
                    <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                    <span>{item.likes}</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed italic">
                  "{item.message}"
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
