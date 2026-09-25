import { PageFrame } from "@/components/PageFrame";

export default function DisclosuresPage() {
  return (
    <PageFrame
      eyebrow="Transparency"
      title="Disclosures"
      description="The final public language should reflect the affiliate programs, financing relationships, and tracking actually used on the site."
    >
      <section className="shell page-section">
        <div className="legal-panel">
          <h2>Affiliate disclosure placeholder</h2>
          <p>
            Some links on this site may be affiliate or referral links. Marc may
            receive compensation when a visitor uses certain links or completes
            an eligible action. Replace this placeholder with program-specific
            language before publishing live affiliate links.
          </p>

          <h2>Funding disclosure placeholder</h2>
          <p>
            Financing approval, terms, rates, and availability depend on the
            provider, underwriting, applicant qualifications, and other factors.
            Nothing on this site should be interpreted as a guarantee of funding.
          </p>
        </div>
      </section>
    </PageFrame>
  );
}
