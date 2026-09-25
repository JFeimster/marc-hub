import Link from "next/link";
import { site } from "@/data/site";

const nav = [
  ["Funding", "/funding"],
  ["Equipment", "/equipment"],
  ["Resources", "/resources"],
  ["Offers", "/offers"],
  ["Tools", "/tools"],
];

export function SiteHeader() {
  return (
    <>
      <div className="identity-strip">
        <div className="shell identity-strip__inner">
          <span>{site.name}</span>
          <span className="identity-strip__tag">RESOURCE HUB</span>
        </div>
      </div>

      <header className="site-header">
        <div className="shell site-header__inner">
          <Link className="brand" href="/" aria-label={`${site.name} home`}>
            ML<span>///</span>
          </Link>

          <nav className="site-nav" aria-label="Primary navigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
