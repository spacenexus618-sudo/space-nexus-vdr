"use client";

import { useState } from "react";
import Image from "next/image";

const locations = [
  {
    id: "usa",
    country: "USA",
    flag: "us",
    address: "2500 Marconi Ave, Ste 101,\nSacramento, CA 95821, United States",
    phone: "+1 646 421 5740",
    mapQuery: "2500+Marconi+Ave+Ste+101+Sacramento+CA+95821",
    coords: { lat: 38.5816, lng: -121.4944 },
  },
  {
    id: "singapore",
    country: "Singapore",
    flag: "sg",
    address: "1 Raffles Place,\nOne Raffles Place, Singapore 048616",
    phone: "+65 86 111 900",
    mapQuery: "1+Raffles+Place+Singapore",
    coords: { lat: 1.2838, lng: 103.8591 },
  },
  {
    id: "dubai",
    country: "Dubai",
    flag: "ae",
    address: "Business Bay, Bay Square,\nBuilding 4, Office 304, Dubai, UAE",
    phone: "+971 56 256 7509",
    mapQuery: "Business+Bay+Bay+Square+Dubai",
    coords: { lat: 25.1857, lng: 55.2657 },
  },
  {
    id: "india",
    country: "India",
    flag: "in",
    address: "WeWork, Salarpuria Softzone,\nORR, Bengaluru, Karnataka 560103, India",
    phone: "+91 80 4567 8900",
    mapQuery: "Salarpuria+Softzone+Bengaluru+India",
    coords: { lat: 12.9716, lng: 77.5946 },
  },
  {
    id: "kuwait",
    country: "Kuwait",
    flag: "kw",
    address: "Al Hamra Tower, 44th Floor,\nSharq, Kuwait City, Kuwait",
    phone: "+965 9724 3755",
    mapQuery: "Al+Hamra+Tower+Kuwait+City",
    coords: { lat: 29.3759, lng: 47.9774 },
  },
  {
    id: "canada",
    country: "Canada",
    flag: "ca",
    address: "100 King Street West,\nSuite 5600, Toronto, ON M5X 1C6, Canada",
    phone: "+1 (979) 326-9493",
    mapQuery: "100+King+Street+West+Toronto",
    coords: { lat: 43.6484, lng: -79.3810 },
  },
  {
    id: "hongkong",
    country: "Hong Kong",
    flag: "hk",
    address: "Two Taikoo Place,\n979 King's Road, Quarry Bay, Hong Kong",
    phone: "+852 3700 1234",
    mapQuery: "Two+Taikoo+Place+Hong+Kong",
    coords: { lat: 22.2855, lng: 114.2120 },
  },
  {
    id: "saudiarabia",
    country: "Saudi Arabia",
    flag: "sa",
    address: "King Fahd Road, Al Olaya District,\nRiyadh 12211, Saudi Arabia",
    phone: "+966 56 208 1999",
    mapQuery: "King+Fahd+Road+Riyadh+Saudi+Arabia",
    coords: { lat: 24.7136, lng: 46.6753 },
  },
];

export default function GlobalPresence() {
  const [selected, setSelected] = useState(locations[0]);

  const getMapUrl = () => {
    const { lat, lng } = selected.coords;
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDM0JzUzLjgiTiAxMjHCsDI5JzM5LjgiVw!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Global <span className="text-[#60a5fa]">Presence</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Leveraging our expertise across multiple locations to deliver tailored virtual data room solutions for your unique needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          {/* Left Sidebar - Country Selector */}
          <div className="lg:w-64 flex-shrink-0 p-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelected(loc)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all whitespace-nowrap lg:whitespace-normal min-w-max lg:min-w-0 w-full ${
                  selected.id === loc.id
                    ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <img
                  src={`https://flagcdn.com/w40/${loc.flag}.png`}
                  alt={`${loc.country} flag`}
                  className="w-6 h-auto rounded-sm flex-shrink-0"
                  loading="lazy"
                />
                <span className="font-medium text-sm">{loc.country}</span>
              </button>
            ))}
          </div>

          {/* Right Side - Map + Info */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-[500px]">
            {/* Google Map */}
            <iframe
              src={getMapUrl()}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title={`Map of ${selected.country}`}
            />

            {/* Location Info Card */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 z-10">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Office</p>
              <h3 className="text-white font-bold text-lg mb-4">SpaceNexus Headquarters</h3>

              <div className="space-y-3 mb-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{selected.address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <a href={`tel:${selected.phone.replace(/\s/g, "")}`} className="text-white text-sm font-medium hover:text-[#60a5fa] transition-colors">
                    {selected.phone}
                  </a>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${selected.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold rounded-xl transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
