import React, { useState } from 'react';
import { ArtistConfig } from '../types/artist';
import { Play, ArrowRight, X } from 'lucide-react';

interface VideosTabProps {
  config: ArtistConfig;
}

export const VideosTab: React.FC<VideosTabProps> = ({ config }) => {
  const allVideos = config.tabs.videos.items;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const activeVideo = allVideos[selectedIndex] || allVideos[0];
  const otherVideos = allVideos.filter((_, idx) => idx !== selectedIndex);

  if (!activeVideo) return null;

  const youtubeSocial = config.socials.find(s => s.platform === 'youtube');
  const youtubeUrl = youtubeSocial?.url || `https://www.youtube.com/watch?v=${activeVideo.youtubeId}`;
  const videoThumbnail = activeVideo.thumbnail || `https://i.ytimg.com/vi/${activeVideo.youtubeId}/hqdefault.jpg`;

  const handleSelectVideo = (idx: number) => {
    setSelectedIndex(idx);
    setIsPlaying(true);
  };

  return (
    <div className="py-8 sm:py-16 animate-in fade-in duration-500 bg-black text-white min-h-[70vh] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Title & Watch More CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-10 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 block">
                VIDEOS
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans leading-tight">
                {activeVideo.title}
              </h2>
            </div>

            <div className="pt-2">
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-white hover:text-zinc-300 transition-colors"
              >
                <span>Watch On Youtube Channel</span>
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-lg shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded YouTube Player & Thumbnails */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Main Video Container */}
            <div 
              className="relative aspect-video w-full bg-zinc-900 border border-white/20 shadow-2xl overflow-hidden group"
              title={activeVideo.title}
            >
              {isPlaying ? (
                <div className="relative w-full h-full">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-3 right-3 z-10 p-2 bg-black/80 hover:bg-black text-white rounded-full border border-white/30 backdrop-blur-md transition-all"
                    title="Close Video"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div 
                  onClick={() => setIsPlaying(true)}
                  className="relative w-full h-full cursor-pointer"
                >
                  <img
                    src={videoThumbnail}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/80 text-white border border-white/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xl">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1 bg-black/90 border border-white/30 text-[10px] font-bold uppercase tracking-widest text-white">
                    {activeVideo.type}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/90 border border-white/30 text-[10px] font-bold uppercase tracking-widest text-zinc-300 font-mono">
                    {activeVideo.duration}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Row of Other Thumbnails */}
            {otherVideos.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                {otherVideos.slice(0, 3).map((video) => {
                  const actualIdx = allVideos.findIndex(v => v.id === video.id);
                  const thumb = video.thumbnail || `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                  return (
                    <div
                      key={video.id}
                      onClick={() => handleSelectVideo(actualIdx)}
                      className="group relative aspect-video bg-zinc-900 border border-white/10 hover:border-white/60 cursor-pointer overflow-hidden transition-all shadow-lg"
                      title={video.title}
                    >
                      <img
                        src={thumb}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-black/70 text-white border border-white/30 flex items-center justify-center transition-transform group-hover:scale-110">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 truncate text-[9px] font-bold uppercase tracking-widest text-white bg-black/80 px-1.5 py-0.5">
                        {video.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
