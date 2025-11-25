"use client";
import { GoogleTagManager } from "@next/third-parties/google";

export default function GTM() {
  return <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />;
}
