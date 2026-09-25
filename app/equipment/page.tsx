import { PageFrame } from "@/components/PageFrame";
import { PlaceholderPanel } from "@/components/PlaceholderPanel";

export default function EquipmentPage() {
  return (
    <PageFrame
      eyebrow="Equipment & Expansion"
      title="The stuff that makes the business move."
      description="A dedicated route for equipment financing, vehicle and fleet needs, vendor resources, and expansion-related links."
    >
      <section className="shell page-section">
        <PlaceholderPanel
          title="Equipment route reserved."
          body="This can stay a simple resource page or grow into a dedicated equipment-financing microsite later."
          accent="green"
        />
      </section>
    </PageFrame>
  );
}
