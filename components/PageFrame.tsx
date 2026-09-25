import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function PageFrame({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main>
      <SiteHeader />

      <section className="page-hero">
        <div className="shell">
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p className="page-hero__lede">{description}</p>
        </div>
      </section>

      {children}
      <SiteFooter />
    </main>
  );
}
