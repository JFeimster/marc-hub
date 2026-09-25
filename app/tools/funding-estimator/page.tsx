import { PageFrame } from "@/components/PageFrame";
import { PlaceholderPanel } from "@/components/PlaceholderPanel";

export default function FundingEstimatorPage() {
  return (
    <PageFrame
      eyebrow="Planned Tool"
      title="Funding Estimator"
      description="Reserved for a future funding-range, readiness, or qualification experience."
    >
      <section className="shell page-section">
        <PlaceholderPanel
          title="Route reserved."
          body="Build the first lightweight version here. If it later needs independent APIs, branding, or deployment, promote it into apps/funding-tool."
          accent="blue"
        />
      </section>
    </PageFrame>
  );
}
