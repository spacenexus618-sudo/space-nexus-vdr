"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import KindoraFooter from "../kindora/components/KindoraFooter";

export default function AppFooter() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Footer />;
  }

  if (pathname?.startsWith("/kindora")) return <KindoraFooter />;
  return <Footer />;
}
