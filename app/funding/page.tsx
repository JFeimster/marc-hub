import { PageFrame } from "@/components/PageFrame";
import { PlaceholderPanel } from "@/components/PlaceholderPanel";
import { affiliateLinks } from "@/data/site";

export default function FundingPage() {
  const fundingLinks = affiliateLinks.filter(
    (item) => item.enabled && item.category === "funding",
  );

  return (
    <PageFrame
      eyebrow="Business Funding"
      title="Capital paths without the scavenger hunt."
      description="This route is ready for Marc's funding links, application paths, lender resources, and qualification tools."
    >
      <section className="shell page-section">
        {fundingLinks.length === 0 ? (
          <PlaceholderPanel
            title="Ready for Marc's funding links."
            body="Add confirmed funding destinations in data/site.ts. Once enabled, they can be rendered here and on the main hub without duplicating content."
            accent="yellow"
          />
        ) : null}
      </section>
    </PageFrame>
  );
}
