import React from 'react';
import { Heart, Sparkles, Users, Church } from 'lucide-react';
import type { WeddingDetails } from '../types';

const BASE = import.meta.env.BASE_URL;

interface StoryTimelineProps {
  details: WeddingDetails;
}

export const StoryTimeline: React.FC<StoryTimelineProps> = ({ details }) => {
  const timelineEvents = [
    {
      icon: Users,
      title: 'Arranged by Elders, Destined by Heart',
      date: 'Family Union',
      desc: 'Our parents brought two beautiful traditional families together. With laughter, warm blessings, and matching values, our paths aligned seamlessly.',
    },
    {
      icon: Heart,
      title: 'The First Meeting',
      date: 'First Glance & Smiles',
      desc: 'Over warm filter coffee and delicious sweets, our first conversation felt as natural as if we had known each other for a lifetime.',
    },
    {
      icon: Sparkles,
      title: 'The Betrothal (Nitchayathartham)',
      date: 'Formal Engagement',
      desc: 'With family rituals, silk clothes exchange, and sacred blessings from elders, our wedding date was joyfully solemnized.',
    },
    {
      icon: Church,
      title: 'The Grand Wedding (Muhurtham)',
      date: new Date(details.weddingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      desc: 'Now we step into seven sacred vows together under the holy mandap, surrounded by family, friends, and lifelong happiness.',
    },
  ];

  return (
    <section id="story" className="py-20 px-4 relative z-20">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-cinzel tracking-[0.3em] text-amber-400 uppercase font-semibold">
            ✦ Two Families, One Golden Chapter ✦
          </span>
          <h2 className="text-4xl md:text-5xl font-serif-royal font-bold text-amber-200">
            Meet The Bride & Groom
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
        </div>

        {/* Bride & Groom Profile Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Groom Card */}
          <div className="glass-card rounded-3xl p-6 border border-amber-500/30 gold-glow space-y-4 hover:scale-[1.02] transition-transform">
            <div className="relative h-72 rounded-2xl overflow-hidden border-2 border-amber-500/40">
              <img
                src={details.groomImg || `${BASE}groom.jpg`}
                alt={details.groomName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15091c] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/30 text-amber-300 border border-amber-400/40">
                  The Groom
                </span>
                <h3 className="text-3xl font-script text-amber-200 mt-1">
                  {details.groomName}
                </h3>
              </div>
            </div>
            <div className="space-y-2 text-sm text-amber-100/80">
              <p className="font-semibold text-amber-300">
                {details.groomTitle || 'Senior Software Engineer'}
              </p>
              <p className="text-xs text-amber-200/60">
                Son of {details.groomFamily || 'Mr. & Mrs. R. Sundaram'}
              </p>
              <p className="text-xs leading-relaxed italic text-amber-200/70 pt-1">
                "Excited to begin this lifelong journey of companionship, backed by family values, love, and laughter."
              </p>
            </div>
          </div>

          {/* Bride Card */}
          <div className="glass-card rounded-3xl p-6 border border-amber-500/30 gold-glow space-y-4 hover:scale-[1.02] transition-transform">
            <div className="relative h-72 rounded-2xl overflow-hidden border-2 border-amber-500/40">
              <img
                src={details.brideImg || `${BASE}bride.jpg`}
                alt={details.brideName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15091c] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-500/30 text-rose-300 border border-rose-400/40">
                  The Bride
                </span>
                <h3 className="text-3xl font-script text-amber-200 mt-1">
                  {details.brideName}
                </h3>
              </div>
            </div>
            <div className="space-y-2 text-sm text-amber-100/80">
              <p className="font-semibold text-amber-300">
                {details.brideTitle || 'Creative UI/UX Designer'}
              </p>
              <p className="text-xs text-amber-200/60">
                Daughter of {details.brideFamily || 'Mr. & Mrs. K. Murugan'}
              </p>
              <p className="text-xs leading-relaxed italic text-amber-200/70 pt-1">
                "Blessed to step into a new home with sacred traditions, warmth, and full support from our loved ones."
              </p>
            </div>
          </div>

        </div>

        {/* Arranged Marriage Journey Timeline */}
        <div className="pt-10 space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-serif-royal font-bold text-amber-200">
              Our Journey To Forever
            </h3>
            <p className="text-xs text-amber-300/60 font-cinzel tracking-widest mt-1">
              ARRANGED MARRIAGE MILESTONES
            </p>
          </div>

          <div className="relative border-l-2 border-amber-500/30 ml-4 md:ml-32 space-y-10">
            {timelineEvents.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="relative pl-8 md:pl-12 group">
                  {/* Timeline Dot Icon */}
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 border-2 border-amber-200 flex items-center justify-center text-amber-950 shadow-lg group-hover:scale-125 transition-transform">
                    <IconComp className="w-4 h-4" />
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 space-y-2 group-hover:border-amber-400/40 transition-colors">
                    <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                      {item.date}
                    </span>
                    <h4 className="text-xl font-serif-royal font-bold text-amber-200">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-amber-100/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
