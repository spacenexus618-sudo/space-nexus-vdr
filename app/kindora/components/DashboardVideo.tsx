"use client";

import { useEffect, useRef } from "react";

export function DashboardVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Play when 50% visible
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/10 via-transparent to-transparent z-10 pointer-events-none" />
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-700 overflow-hidden mx-auto max-w-7xl">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-200 border-b border-gray-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-700/50 rounded-lg text-xs text-gray-400">
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              app.kindora.io/dashboard
            </div>
          </div>
        </div>

        {/* Dashboard Content Preview - Video */}
        <div className="relative aspect-[16/9] bg-gray-900">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
          >
            <source src="/videos/kindora-demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Subtle overlay to match the high-end dashboard feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}