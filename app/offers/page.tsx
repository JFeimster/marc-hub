import { PageFrame } from "@/components/PageFrame";
import { PlaceholderPanel } from "@/components/PlaceholderPanel";

export default function OffersPage() {
  return (
    <PageFrame
      eyebrow="Recommended Offers"
      title="Things Marc is willing to put his name next to."
      description="Affiliate and partner offers can live here with clear descriptions, tracking, and disclosure instead of anonymous button soup."
    >
      <section className="shell page-section">
        <PlaceholderPanel
          title="Offer catalog scaffolded."
          body="Add each confirmed partner link once in data/site.ts, then surface it here, on the homepage, or in future campaign pages."
          accent="pink"
        />
      </section>
    </PageFrame>
  );
}
