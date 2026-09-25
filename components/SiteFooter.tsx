import Link from "next/link";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <div className="eyebrow eyebrow--green">Marc's Hub</div>
          <h2>{site.name}</h2>
          <p>
            Curated links, funding resources, practical tools, and partner offers.
          </p>
        </div>

        <div className="site-footer__links">
          <Link href="/funding">Funding</Link>
          <Link href="/equipment">Equipment</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/offers">Offers</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/disclosures">Disclosures</Link>
        </div>
      </div>
    </footer>
  );
}
