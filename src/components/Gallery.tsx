import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';
import type { WeddingDetails } from '../types';

interface GalleryProps {
  details: WeddingDetails;
}

export const Gallery: React.FC<GalleryProps> = ({ details }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: details.coupleImg || '/couple.jpg', caption: 'Together Under The Mandap' },
    { src: details.groomImg || '/groom.jpg', caption: 'The Handsome Groom' },
    { src: details.brideImg || '/bride.jpg', caption: 'The Graceful Bride' },
    { src: details.coupleImg || '/couple.jpg', caption: 'Pre-Wedding Celebrations' },
  ];

  return (
    <section id="gallery" className="py-20 px-4 relative z-20">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-cinzel tracking-[0.3em] text-amber-400 uppercase font-semibold">
            ✦ MEMORIES & SANTI ✦
          </span>
          <h2 className="text-4xl md:text-5xl font-serif-royal font-bold text-amber-200">
            Pre-Wedding Gallery
          </h2>
          <p className="text-xs md:text-sm text-amber-200/70">
            Glimpses of smiles, traditions, and togetherness
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
        </div>

        {/* Photos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img.src)}
              className="group relative h-72 rounded-2xl overflow-hidden glass-card border border-amber-500/30 cursor-pointer shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0714] via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-xs font-semibold text-amber-200 drop-shadow-md">
                  {img.caption}
                </p>
                <span className="text-[10px] text-amber-400/80 font-cinzel flex items-center justify-center gap-1 mt-1">
                  <Camera className="w-3 h-3" /> Click to view full image
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Full Screen Lightbox Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedImage}
              alt="Gallery Lightbox"
              className="max-w-full max-h-[85vh] rounded-2xl border-2 border-amber-400/40 shadow-2xl"
            />
          </div>
        )}

      </div>
    </section>
  );
};
