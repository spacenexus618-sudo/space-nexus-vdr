"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "+17652713686";
  const message = "Hi, I'm interested in Space Nexus services.";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
      {/* Tooltip/Label */}
      <div
        className="hidden md:block bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 transform transition-all duration-300 origin-right opacity-0 hover:opacity-100 translate-x-4 hover:translate-x-0 group-hover:opacity-100 group-hover:translate-x-0"
      >
        <p className="text-sm font-medium text-gray-700 whitespace-nowrap">
          Chat with us on WhatsApp
        </p>
      </div>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping group-hover:animate-none"></span>
        
        {/* Icon */}
        <MessageCircle className="w-7 h-7 text-white relative z-10" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
