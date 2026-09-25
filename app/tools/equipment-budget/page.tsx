import { PageFrame } from "@/components/PageFrame";
import { PlaceholderPanel } from "@/components/PlaceholderPanel";

export default function EquipmentBudgetPage() {
  return (
    <PageFrame
      eyebrow="Planned Tool"
      title="Equipment Budget Tool"
      description="Reserved for an equipment-cost, payment, down-payment, or financing-planning utility."
    >
      <section className="shell page-section">
        <PlaceholderPanel
          title="Route reserved."
          body="This gives the future calculator a URL today without forcing a separate application before one is actually needed."
          accent="green"
        />
      </section>
    </PageFrame>
  );
}
