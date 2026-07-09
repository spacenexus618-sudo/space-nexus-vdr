"use client";

import { useState, useEffect } from "react";

interface StatusIndicator {
  service: string;
  status: "operational" | "degraded" | "outage";
}

export default function SystemStatus() {
  const [services, setServices] = useState<StatusIndicator[]>([
    { service: "Data Room", status: "operational" },
    { service: "API", status: "operational" },
    { service: "CDN", status: "operational" },
  ]);

  const [uptime, setUptime] = useState("99.99%");

  // Simulate real-time status (in production, this would fetch from an API)
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update for demo purposes
      setUptime((prev) => (Math.random() > 0.5 ? "99.99%" : "99.98%"));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const allOperational = services.every((s) => s.status === "operational");

  return (
    <div className="fixed bottom-6 left-4 md:left-6 z-50">
      <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200 flex items-center gap-3 hover:shadow-xl transition-shadow">
        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              allOperational
                ? "bg-green-500 animate-pulse"
                : "bg-yellow-500 animate-pulse"
            }`}
          />
          <span className="text-sm font-medium text-gray-700">
            {allOperational ? "All Systems Operational" : "Partial Outage"}
          </span>
        </div>

        {/* Separator */}
        <div className="w-px h-4 bg-gray-300" />

        {/* Uptime */}
        <span className="text-sm text-gray-500 min-w-[5.5rem] text-right">{uptime} uptime</span>
      </div>
    </div>
  );
}
