import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
