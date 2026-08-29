import { useState, useEffect } from 'react';
import type { WeddingDetails } from './types';
import { PetalsCanvas } from './components/PetalsCanvas';
import { Envelope } from './components/Envelope';
import { MusicPlayer } from './components/MusicPlayer';
import { Countdown } from './components/Countdown';
import { AnimatedMandapLogo } from './components/AnimatedMandapLogo';
import { FloralDivider } from './components/FloralDivider';
import { AnimatedBlessingSymbol } from './components/AnimatedBlessingSymbol';
import { AnimatedRingIcon, AnimatedWeddingIcon, AnimatedReceptionIcon } from './components/AnimatedEventIcons';
import confetti from 'canvas-confetti';
import { MapPin, Clock, Heart, Sparkles, ExternalLink } from 'lucide-react';

const MOHANRAM_RANJANEI_DETAILS: WeddingDetails = {
  groomName: 'Mohanram',
  groomTitle: 'Groom',
  groomFamily: 'Mr. & Mrs. Families',
  groomImg: '/groom.jpg',
  brideName: 'Ranjanei',
  brideTitle: 'Bride',
  brideFamily: 'Mr. & Mrs. Families',
  brideImg: '/bride.jpg',
  coupleImg: '/couple.jpg',
  weddingDate: '2026-09-13T08:45:00', // Sep 13, 2026 at 8:45 AM
  
  engagementDate: 'Sep 12, 6:00 PM onwards',
  engagementVenue: 'Pushpam Mahal, Trichy',
  engagementMapUrl: 'https://maps.app.goo.gl/XT2YY8Q51STpZKXSA',

  muhurthamDate: 'Sep 13, 8:45 AM to 10:15 AM',
  weddingVenue: 'Pushpam Mahal, Trichy',
  weddingMapUrl: 'https://maps.app.goo.gl/XT2YY8Q51STpZKXSA',

  receptionDate: 'Sep 20, 6:30 PM to 9:30 PM',
  receptionVenue: 'Anjappar, Porur, Chennai',
  receptionMapUrl: 'https://maps.app.goo.gl/qqkpDewn6E7VKfag8',

  venueName: 'Pushpam Mahal, Trichy',
  venueAddress: 'Pushpam Mahal, Trichy & Anjappar, Porur, Chennai',
  venueMapUrl: 'https://maps.app.goo.gl/XT2YY8Q51STpZKXSA',
  bgmAudioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-flute-112199.mp3',
  customMessage: 'Together with our families, we are absolutely thrilled to share some wonderful news with you! As we step into a new chapter, we would be honored to have you by our side.',
};

export function App() {
  const [details] = useState<WeddingDetails>(MOHANRAM_RANJANEI_DETAILS);
  const [guestName, setGuestName] = useState<string>('');
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState<boolean>(false);
  const [autoPlayAudio, setAutoPlayAudio] = useState<boolean>(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guestParam = params.get('guest') || params.get('name') || '';
    if (guestParam) {
      setGuestName(guestParam);
    }
  }, []);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpened(true);
    setAutoPlayAudio(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#f59e0b', '#ef4444', '#ec4899', '#ffffff', '#fbbf24']
    });
  };

  const triggerFlowerShower = () => {
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#ef4444', '#ec4899', '#f59e0b', '#fbbf24']
    });
  };

  const triggerHeartBlessings = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ec4899', '#ef4444', '#ffffff']
    });
  };

  return (
    <div className="min-h-screen bg-[#08020a] text-amber-50 relative selection:bg-amber-500 selection:text-white flex justify-center p-0 sm:p-4 antialiased">
      
      {/* Ambient Falling Petals Background */}
      <PetalsCanvas />

      {/* Opening Envelope Modal (Unboxing Screen) */}
      {!isEnvelopeOpened && (
        <Envelope
          details={details}
          guestName={guestName}
          onOpen={handleOpenEnvelope}
        />
      )}

      {/* Background Music Player */}
      <MusicPlayer
        audioUrl={details.bgmAudioUrl}
        autoPlayTriggered={autoPlayAudio}
      />

      {/* SINGLE PAGE CONTINUOUS SCROLL MOBILE INVITATION CARD */}
      {isEnvelopeOpened && (
        <main className="w-full max-w-md min-h-screen sm:min-h-0 sm:rounded-[36px] bg-gradient-to-b from-[#250d33] via-[#1a0826] to-[#0c0312] border-0 sm:border-2 border-amber-500/40 shadow-2xl gold-glow relative overflow-hidden pb-16 animate-fade-in space-y-8">
          
          {/* Ambient Gold Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/20 blur-[100px] rounded-full pointer-events-none" />

          {/* SECTION 1: HEADER WITH STICKERS & INVITATION MESSAGE */}
          <section className="relative pt-6 px-6 text-center space-y-4">
            
            {/* Animated Mandap Logo */}
            <AnimatedMandapLogo />

            {/* Traditional Diya & Mantra Header */}
            <div className="flex items-center justify-between px-2">
              {/* Diya Sticker Left */}
              <div className="w-10 h-10 rounded-full overflow-hidden flame-glow border border-amber-400/50 p-0.5 bg-amber-500/10">
                <img src="/diya_sticker.jpg" alt="Traditional Diya" className="w-full h-full object-cover rounded-full" />
              </div>

              <div className="text-[10px] sm:text-[11px] font-cinzel tracking-[0.2em] text-amber-400 font-semibold uppercase">
                || Om Sri Ganeshaya Namaha ||
              </div>

              {/* Diya Sticker Right */}
              <div className="w-10 h-10 rounded-full overflow-hidden flame-glow border border-amber-400/50 p-0.5 bg-amber-500/10">
                <img src="/diya_sticker.jpg" alt="Traditional Diya" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>

            {/* Save The Date Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-amber-400/40 bg-amber-500/10 text-amber-300 text-[11px] font-semibold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Save The Date
              <Sparkles className="w-3 h-3 text-amber-400" />
            </div>

            {/* Personalized Guest Badge */}
            {guestName && (
              <div className="p-2.5 rounded-2xl bg-amber-500/15 border border-amber-400/40 shadow-sm animate-bounce">
                <p className="text-[10px] text-amber-200/80 uppercase font-semibold tracking-wider">Warm Welcome To</p>
                <p className="text-base font-serif-royal font-bold text-amber-300">{guestName} & Family</p>
              </div>
            )}

            {/* Couple Names Calligraphy */}
            <div className="pt-2 space-y-1">
              <p className="text-[10px] tracking-[0.3em] font-cinzel text-amber-300/80 uppercase">
                TOGETHER WITH OUR FAMILIES
              </p>
              <h1 className="text-5xl sm:text-6xl font-script text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 py-1 drop-shadow-md">
                Mohanram
              </h1>
              <div className="my-1 flex items-center justify-center gap-3">
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-script text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 py-1 drop-shadow-md">
                Ranjanei
              </h1>
            </div>

            <p className="text-xs text-amber-100/90 font-serif-royal italic max-w-xs mx-auto leading-relaxed pt-1">
              "We are absolutely thrilled to share this wonderful news with you! As we step into a new chapter, we would be honored to have you by our side."
            </p>

            {/* CUTE SOUTH INDIAN WEDDING STICKER BADGE */}
            <div className="relative my-4 flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-amber-400/60 p-1 glass-panel gold-glow animate-sticker-float">
                <img
                  src="/couple_sticker.jpg"
                  alt="Cute Wedding Couple Sticker"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating Flower / Heart Reaction Sticker Buttons */}
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={triggerFlowerShower}
                  className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-500/20 to-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-semibold hover:scale-105 transition-transform flex items-center gap-1.5 shadow-md"
                >
                  <span>🌸 Shower Flowers</span>
                </button>

                <button
                  onClick={triggerHeartBlessings}
                  className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-rose-400/40 text-rose-200 text-xs font-semibold hover:scale-105 transition-transform flex items-center gap-1.5 shadow-md"
                >
                  <span>❤️ Send Love</span>
                </button>
              </div>
            </div>
          </section>

          {/* SECTION 2: REAL-TIME COUNTDOWN TIMER */}
          <section className="px-6 text-center space-y-2">
            <p className="text-[10px] text-amber-400 font-cinzel tracking-widest uppercase">
              Countdown To Auspicious Muhurtham
            </p>
            <Countdown targetDate={details.weddingDate} />
          </section>

          {/* Floral Divider — amber between countdown and events */}
          <FloralDivider color="amber" />

          {/* SECTION 3: EVENT DETAILS & MAP — NEW DESIGN */}
          <section className="px-4 space-y-0">

            {/* Section Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 border border-amber-400/30 mb-3">
                <span className="text-[9px] font-cinzel tracking-[0.25em] text-amber-400 uppercase font-bold">Sacred Ceremonies</span>
              </div>
              <h2 className="text-2xl font-serif-royal font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 leading-tight">
                Event Details & Venues
              </h2>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400" />
                <span className="text-amber-400 text-xs">🪔</span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400" />
              </div>
            </div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-amber-500/60 via-amber-400/30 to-emerald-500/40 z-0" />

              {/* --- EVENT 1: ENGAGEMENT --- */}
              <div className="relative z-10 mb-5">
                <div className="flex gap-3 items-start">
                  {/* Timeline Node — Engagement */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex flex-col items-center justify-center shadow-lg shadow-amber-500/30 border-2 border-amber-300/50">
                    <AnimatedRingIcon />
                    <span className="text-[8px] font-bold text-amber-900 uppercase tracking-wide mt-0.5">01</span>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 rounded-2xl overflow-hidden border border-amber-500/25 bg-gradient-to-br from-[#2a1040]/80 to-[#1a0828]/90 backdrop-blur-md shadow-xl">
                    {/* Card Header Strip */}
                    <div className="px-4 pt-3 pb-1.5 border-b border-amber-500/15 flex items-center justify-between">
                      <span className="text-[10px] font-black tracking-[0.2em] text-amber-400 uppercase">Engagement</span>
                      <div className="flex items-center gap-1 text-amber-300/60 text-[9px] font-medium">
                        <Clock className="w-3 h-3" />
                        <span>Sep 12</span>
                      </div>
                    </div>
                    {/* Card Content */}
                    <div className="px-4 pt-2.5 pb-3 space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-serif-royal font-bold text-amber-100">6:00 PM</span>
                        <span className="text-[10px] text-amber-300/70 font-medium">onwards</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3 h-3 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span className="text-[11px] text-amber-100/80 font-medium leading-tight">Pushpam Mahal, Trichy</span>
                      </div>
                      {/* Map Button */}
                      <a
                        href="https://maps.app.goo.gl/XT2YY8Q51STpZKXSA"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-amber-500/10 border border-amber-400/30 group hover:bg-amber-500/20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                          </div>
                          <span className="text-[11px] font-bold text-amber-300">Open in Google Maps</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- EVENT 2: WEDDING MUHURTHAM (FEATURED) --- */}
              <div className="relative z-10 mb-5">
                <div className="flex gap-3 items-start">
                  {/* Timeline Node — Wedding */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 via-pink-500 to-amber-500 flex flex-col items-center justify-center shadow-lg shadow-rose-500/40 border-2 border-rose-300/60 gold-glow">
                    <AnimatedWeddingIcon />
                    <span className="text-[8px] font-bold text-white uppercase tracking-wide mt-0.5">02</span>
                  </div>

                  {/* Card Body — FEATURED */}
                  <div className="flex-1 rounded-2xl overflow-hidden border-2 border-amber-400/50 bg-gradient-to-br from-[#3a0d2a]/90 via-[#280b22]/90 to-[#1a0618]/95 backdrop-blur-md shadow-2xl shadow-amber-500/20 gold-glow">
                    {/* Card Header Strip — gradient accent */}
                    <div className="px-4 pt-3 pb-2 bg-gradient-to-r from-rose-500/20 via-amber-500/10 to-transparent border-b border-amber-400/20 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-black tracking-[0.2em] text-rose-300 uppercase">Wedding</span>
                        <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold uppercase">Muhurtham</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-300/70 text-[9px] font-medium">
                        <Clock className="w-3 h-3" />
                        <span>Sep 13</span>
                      </div>
                    </div>
                    {/* Card Content */}
                    <div className="px-4 pt-2.5 pb-3 space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-serif-royal font-bold text-amber-100">8:45 AM</span>
                        <span className="text-[10px] text-amber-300/70 font-medium">to 10:15 AM</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3 h-3 text-rose-400 mt-0.5 flex-shrink-0" />
                        <span className="text-[11px] text-amber-100/80 font-medium leading-tight">Pushpam Mahal, Trichy</span>
                      </div>
                      {/* Map Button — PREMIUM GOLD CTA */}
                      <a
                        href="https://maps.app.goo.gl/XT2YY8Q51STpZKXSA"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 shadow-lg shadow-amber-500/30 group hover:from-amber-400 hover:to-yellow-400 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-amber-800/30 flex items-center justify-center">
                            <MapPin className="w-3 h-3 text-amber-950" />
                          </div>
                          <span className="text-[11px] font-black text-amber-950">Open in Google Maps</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-amber-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- EVENT 3: RECEPTION --- */}
              <div className="relative z-10">
                <div className="flex gap-3 items-start">
                  {/* Timeline Node — Reception */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex flex-col items-center justify-center shadow-lg shadow-emerald-500/30 border-2 border-emerald-300/40">
                    <AnimatedReceptionIcon />
                    <span className="text-[8px] font-bold text-emerald-100 uppercase tracking-wide mt-0.5">03</span>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 rounded-2xl overflow-hidden border border-emerald-500/25 bg-gradient-to-br from-[#0d2a1a]/80 to-[#081a10]/90 backdrop-blur-md shadow-xl">
                    {/* Card Header Strip */}
                    <div className="px-4 pt-3 pb-1.5 border-b border-emerald-500/15 flex items-center justify-between">
                      <span className="text-[10px] font-black tracking-[0.2em] text-emerald-400 uppercase">Reception</span>
                      <div className="flex items-center gap-1 text-emerald-300/60 text-[9px] font-medium">
                        <Clock className="w-3 h-3" />
                        <span>Sep 20</span>
                      </div>
                    </div>
                    {/* Card Content */}
                    <div className="px-4 pt-2.5 pb-3 space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-serif-royal font-bold text-emerald-100">6:30 PM</span>
                        <span className="text-[10px] text-emerald-300/70 font-medium">to 9:30 PM</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-[11px] text-amber-100/80 font-medium leading-tight">Anjappar, Porur, Chennai</span>
                      </div>
                      {/* Map Button */}
                      <a
                        href="https://maps.app.goo.gl/qqkpDewn6E7VKfag8"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/30 group hover:bg-emerald-500/20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          </div>
                          <span className="text-[11px] font-bold text-emerald-300">Open in Google Maps</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Floral Divider — rose before footer */}
          <FloralDivider color="rose" />

          {/* SECTION 4: FOOTER PERSONAL INVITATION NOTE */}
          <footer className="text-center py-4 px-6 space-y-2 border-t border-amber-500/20 pt-4">
            {/* Animated Blessing Symbol */}
            <AnimatedBlessingSymbol />
            <p className="text-xs text-amber-200/90 font-serif-royal italic">
              "We look forward to welcoming you and creating beautiful memories together. Please consider this as our personal invitation!"
            </p>
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest pt-1">
              With Love, Mohanram, Ranjanei & Families 🙏
            </p>
          </footer>

        </main>
      )}

    </div>
  );
}

export default App;
