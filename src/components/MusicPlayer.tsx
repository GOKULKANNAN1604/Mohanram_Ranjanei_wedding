import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface MusicPlayerProps {
  audioUrl: string;
  autoPlayTriggered: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ audioUrl, autoPlayTriggered }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlayTriggered && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Autoplay audio blocked or pending user gesture:', err));
    }
  }, [autoPlayTriggered]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log(err));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 scale-90 origin-bottom-right">
      <audio
        ref={audioRef}
        key={audioUrl}
        src={audioUrl || `${import.meta.env.BASE_URL}groom_song.mp3`}
        loop
        preload="auto"
      />

      <div className="glass-panel p-2 rounded-full shadow-xl flex items-center gap-2 border border-amber-500/30">
        <button
          onClick={togglePlay}
          className="w-8 h-8 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 flex items-center justify-center text-amber-300 transition-all hover:scale-105 active:scale-95"
          title={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-amber-300" />
          ) : (
            <Play className="w-4 h-4 fill-amber-300 ml-0.5" />
          )}
        </button>

        {isPlaying && (
          <div className="flex items-center gap-1 px-2">
            <span className="w-1 h-4 bg-amber-400 rounded-full animate-pulse" />
            <span className="w-1 h-6 bg-amber-300 rounded-full animate-pulse delay-75" />
            <span className="w-1 h-3 bg-amber-500 rounded-full animate-pulse delay-150" />
            <span className="w-1 h-5 bg-amber-400 rounded-full animate-pulse delay-100" />
          </div>
        )}

        <button
          onClick={toggleMute}
          className="w-6 h-6 rounded-full bg-amber-500/10 hover:bg-amber-500/20 flex items-center justify-center text-amber-200/80 hover:text-amber-200 transition-colors"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
        </button>

        <span className="hidden md:inline text-xs font-semibold text-amber-300/80 pr-3">
          Wedding BGM
        </span>
      </div>
    </div>
  );
};
