"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import KindoraFooter from "../kindora/components/KindoraFooter";

export default function AppFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith("/kindora")) return <KindoraFooter />;
  return <Footer />;
}
