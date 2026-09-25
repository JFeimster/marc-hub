import Link from "next/link";
import { HubCard } from "@/components/HubCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { affiliateLinks, hubLinks, site } from "@/data/site";

export default function HomePage() {
  const primary = hubLinks.filter((item) => item.enabled);
  const publishedAffiliateLinks = affiliateLinks.filter((item) => item.enabled);

  return (
    <main>
      <SiteHeader />

      <section className="home-hero">
        <div className="shell home-hero__grid">
          <div>
            <div className="eyebrow">{site.eyebrow}</div>
            <h1>{site.headline}</h1>
            <p className="home-hero__lede">{site.description}</p>

            <div className="hero-actions">
              <Link className="btn btn--dark" href="#links">
                Browse Links
              </Link>
              <Link className="btn btn--light" href="/tools">
                Open Tools
              </Link>
            </div>

            <p className="microcopy">
              Some outbound links may be affiliate or referral links. See{" "}
              <Link href="/disclosures">disclosures</Link>.
            </p>
          </div>

          <aside className="identity-card">
            <div className="identity-card__portrait" aria-hidden="true">
              ML
            </div>
            <div className="eyebrow eyebrow--green">Your Contact</div>
            <h2>{site.name}</h2>
            <p>
              One public page for the links, resources, tools, and offers Marc
              actually wants people to use.
            </p>

            <div className="identity-card__meta">
              <span>Funding</span>
              <span>Equipment</span>
              <span>Resources</span>
              <span>Tools</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="utility-rail">
        <div className="shell utility-rail__grid">
          {[
            ["FUNDING", "/funding"],
            ["EQUIPMENT", "/equipment"],
            ["RESOURCES", "/resources"],
            ["OFFERS", "/offers"],
            ["TOOLS", "/tools"],
          ].map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="link-section shell" id="links">
        <div className="section-heading">
          <div>
            <div className="eyebrow eyebrow--blue">Marc's Shortlist</div>
            <h2>Pick what you need.</h2>
          </div>
          <p>
            The homepage stays simple. Deeper pages can grow underneath it
            without turning the link-in-bio into a junk drawer.
          </p>
        </div>

        <div className="hub-grid">
          {primary.map((item, index) => (
            <HubCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="split-band">
        <div className="shell split-band__grid">
          <div>
            <div className="eyebrow eyebrow--green">Built to expand</div>
            <h2>One hub now. More products later.</h2>
            <p>
              Funding pages, calculators, campaign microsites, downloadable
              resources, and standalone Marc tools can all live under the same
              repository until they deserve their own deployment.
            </p>
          </div>

          <div className="process-card">
            <div><strong>01.</strong> Main link hub</div>
            <div><strong>02.</strong> Curated affiliate links</div>
            <div><strong>03.</strong> Funding + equipment pages</div>
            <div><strong>04.</strong> Calculators + utilities</div>
          </div>
        </div>
      </section>

      {publishedAffiliateLinks.length > 0 && (
        <section className="link-section shell">
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow--pink">Featured</div>
              <h2>Recommended links.</h2>
            </div>
          </div>

          <div className="hub-grid">
            {publishedAffiliateLinks.map((item, index) => (
              <HubCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
