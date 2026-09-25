import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";
import { tools } from "@/data/site";

export default function ToolsPage() {
  return (
    <PageFrame
      eyebrow="Tools"
      title="Small tools. Specific jobs."
      description="Calculators and lightweight utilities can start inside Marc Hub and later become standalone Vercel projects if they outgrow the site."
    >
      <section className="shell page-section">
        <div className="tool-grid">
          {tools.map((tool) => (
            <Link key={tool.id} href={tool.href} className="tool-card">
              <span className="tool-card__status">{tool.status}</span>
              <h2>{tool.label}</h2>
              <p>{tool.description}</p>
              <strong>Open route →</strong>
            </Link>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
