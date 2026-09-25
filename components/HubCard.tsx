import Link from "next/link";
import type { HubLink } from "@/data/site";

const classByCategory: Record<HubLink["category"], string> = {
  funding: "card--yellow",
  equipment: "card--green",
  resource: "card--cream",
  offer: "card--pink",
  tool: "card--blue",
  contact: "card--orange",
};

export function HubCard({ item, index }: { item: HubLink; index: number }) {
  const external = item.external || item.href.startsWith("http");

  return (
    <Link
      href={item.href}
      className={`hub-card ${classByCategory[item.category]}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer sponsored" : undefined}
    >
      <div className="hub-card__top">
        <span className="hub-card__number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="hub-card__eyebrow">
          {item.eyebrow || item.category}
        </span>
      </div>

      <div>
        <h2>{item.label}</h2>
        <p>{item.description}</p>
      </div>

      <div className="hub-card__action">
        <span>{external ? "Open link" : "Explore"}</span>
        <span aria-hidden="true">↗</span>
      </div>
    </Link>
  );
}
