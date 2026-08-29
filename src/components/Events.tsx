import React from 'react';
import { Calendar, MapPin, Clock, Shirt, UtensilsCrossed, ExternalLink, Heart, Sparkles, PartyPopper } from 'lucide-react';
import type { WeddingDetails } from '../types';

interface EventsProps {
  details: WeddingDetails;
}

export const Events: React.FC<EventsProps> = ({ details }) => {
  
  const createGoogleCalendarLink = (title: string, detailsText: string, location: string, startDateStr: string) => {
    const startDate = new Date(startDateStr);
    const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000);
    const formatTime = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(detailsText)}&location=${encodeURIComponent(location)}&dates=${formatTime(startDate)}/${formatTime(endDate)}`;
  };

  const eventList = [
    {
      badge: 'Engagement Ceremony',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
      icon: Sparkles,
      title: '💍 Engagement',
      time: details.engagementDate || 'Sep 12, 6:00 PM onwards',
      venue: details.engagementVenue || 'Pushpam Mahal, Trichy',
      mapUrl: details.engagementMapUrl || 'https://maps.app.goo.gl/XT2YY8Q51STpZKXSA',
      attire: 'Traditional Silk Kurta & Saree',
      feast: 'Dinner & Sweets Feast',
      startDate: '2026-09-12T18:00:00',
    },
    {
      badge: 'Auspicious Muhurtham',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-400/30',
      icon: Heart,
      title: '💒 Sacred Wedding Ceremony',
      time: details.muhurthamDate || 'Sep 13, 8:45 AM to 10:15 AM',
      venue: details.weddingVenue || 'Pushpam Mahal, Trichy',
      mapUrl: details.weddingMapUrl || 'https://maps.app.goo.gl/XT2YY8Q51STpZKXSA',
      attire: 'Traditional South Indian Silk Veshti & Kanjivaram Saree',
      feast: 'Grand Traditional Banana Leaf Lunch Feast (Elai Saapadu)',
      startDate: '2026-09-13T08:45:00',
      featured: true,
    },
    {
      badge: 'Grand Reception',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
      icon: PartyPopper,
      title: '🎉 Wedding Reception',
      time: details.receptionDate || 'Sep 20, 6:30 PM to 9:30 PM',
      venue: details.receptionVenue || 'Anjappar, Porur, Chennai',
      mapUrl: details.receptionMapUrl || 'https://maps.app.goo.gl/qqkpDewn6E7VKfag8',
      attire: 'Formal Suit / Elegant Evening Wear',
      feast: 'Special Reception Dinner Feast',
      startDate: '2026-09-20T18:30:00',
    },
  ];

  return (
    <section id="events" className="py-20 px-4 relative z-20 bg-gradient-to-b from-transparent via-[#13081c]/50 to-transparent">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-cinzel tracking-[0.3em] text-amber-400 uppercase font-semibold">
            ✦ CELEBRATIONS & SACRED RITES ✦
          </span>
          <h2 className="text-4xl md:text-5xl font-serif-royal font-bold text-amber-200">
            Event Schedule & Venues
          </h2>
          <p className="text-xs md:text-sm text-amber-200/70 max-w-xl mx-auto">
            Please save the dates and join us for the Engagement, Wedding & Reception!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
        </div>

        {/* 3 Events Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {eventList.map((item, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-3xl p-6 flex flex-col justify-between space-y-6 hover:scale-[1.02] transition-transform relative ${
                item.featured ? 'border-2 border-amber-400/60 gold-glow' : 'border border-amber-500/30'
              }`}
            >
              {item.featured && (
                <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 font-bold text-[10px] tracking-widest uppercase rounded-bl-xl shadow-md">
                  Holy Wedding
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                  <span className={`px-3 py-1 rounded-full font-semibold text-xs border uppercase tracking-widest ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>

                <h3 className="text-xl font-serif-royal font-bold text-amber-200">
                  {item.title}
                </h3>

                <div className="space-y-3 text-xs text-amber-100/80">
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-300">Date & Time</p>
                      <p>{item.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-300">Venue</p>
                      <p className="font-bold text-amber-100">{item.venue}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Shirt className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-300">Attire</p>
                      <p>{item.attire}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <UtensilsCrossed className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-300">Feast</p>
                      <p>{item.feast}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-amber-500/20 flex flex-col gap-2">
                <a
                  href={item.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-amber-950 font-bold text-xs shadow-md flex items-center justify-center gap-1.5 transition-transform hover:scale-[1.02]"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Get Location Map
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={createGoogleCalendarLink(
                    `${item.title} - Mohanram & Ranjanei`,
                    `${item.title} at ${item.venue}`,
                    item.venue,
                    item.startDate
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 rounded-full bg-white/5 hover:bg-white/10 text-amber-300 text-[11px] font-semibold border border-amber-400/30 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Calendar className="w-3 h-3" />
                  Add to Google Calendar
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
