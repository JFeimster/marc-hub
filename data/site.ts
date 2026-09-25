export type HubLink = {
  id: string;
  label: string;
  description: string;
  href: string;
  category: "funding" | "equipment" | "resource" | "offer" | "tool" | "contact";
  eyebrow?: string;
  featured?: boolean;
  enabled: boolean;
  external?: boolean;
};

export type HubTool = {
  id: string;
  label: string;
  description: string;
  href: string;
  status: "planned" | "live";
};

export const site = {
  name: "Marc Lampert",
  shortName: "Marc",
  title: "Marc's Resource Hub",
  eyebrow: "Funding • Tools • Resources",
  headline: "Useful links. Straight answers. Fewer tabs.",
  description:
    "A single place for the funding resources, tools, partner offers, and practical links Marc shares most often.",
  location: "",
  email: "",
  phone: "",
  bookingUrl: "",
} as const;

/**
 * Add Marc's live public links here.
 * Keep enabled=false until the final destination URL is confirmed.
 */
export const hubLinks: HubLink[] = [
  {
    id: "business-funding",
    label: "Business Funding",
    description:
      "Funding programs, application paths, and capital resources for established businesses.",
    href: "/funding",
    category: "funding",
    eyebrow: "Capital",
    featured: true,
    enabled: true,
  },
  {
    id: "equipment-financing",
    label: "Equipment & Expansion",
    description:
      "A home for equipment financing, vehicle, fleet, and business-expansion resources.",
    href: "/equipment",
    category: "equipment",
    eyebrow: "Equipment",
    featured: true,
    enabled: true,
  },
  {
    id: "resource-library",
    label: "Resource Library",
    description:
      "Guides, useful references, calculators, and links worth keeping handy.",
    href: "/resources",
    category: "resource",
    eyebrow: "Resources",
    featured: true,
    enabled: true,
  },
  {
    id: "recommended-offers",
    label: "Recommended Offers",
    description:
      "Curated partner and affiliate offers Marc chooses to share publicly.",
    href: "/offers",
    category: "offer",
    eyebrow: "Offers",
    featured: true,
    enabled: true,
  },
  {
    id: "tools",
    label: "Tools",
    description:
      "Small calculators, estimators, and practical utilities as they are released.",
    href: "/tools",
    category: "tool",
    eyebrow: "Tools",
    featured: true,
    enabled: true,
  }
];

export const affiliateLinks: HubLink[] = [
  // Example — replace with real data when ready:
  // {
  //   id: "partner-example",
  //   label: "Example Partner",
  //   description: "Short, plain-English explanation of why Marc shares this.",
  //   href: "https://example.com/?ref=marc",
  //   category: "offer",
  //   eyebrow: "Partner",
  //   featured: false,
  //   enabled: true,
  //   external: true,
  // },
];

export const tools: HubTool[] = [
  {
    id: "funding-estimator",
    label: "Funding Estimator",
    description:
      "Reserved for a lightweight qualification or funding-range utility.",
    href: "/tools/funding-estimator",
    status: "planned",
  },
  {
    id: "equipment-budget",
    label: "Equipment Budget Tool",
    description:
      "Reserved for equipment-cost, down-payment, or financing scenarios.",
    href: "/tools/equipment-budget",
    status: "planned",
  },
];
