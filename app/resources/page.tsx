import { PageFrame } from "@/components/PageFrame";
import { PlaceholderPanel } from "@/components/PlaceholderPanel";

export default function ResourcesPage() {
  return (
    <PageFrame
      eyebrow="Resource Library"
      title="Useful stuff worth bookmarking."
      description="Guides, checklists, articles, downloads, and reference links can live here without cluttering the homepage."
    >
      <section className="shell page-section">
        <PlaceholderPanel
          title="Resource library scaffolded."
          body="Add guides, PDFs, checklists, videos, or external reference links as Marc decides what he wants to share."
          accent="blue"
        />
      </section>
    </PageFrame>
  );
}
