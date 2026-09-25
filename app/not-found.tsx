import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__card">
        <div className="eyebrow">404</div>
        <h1>That link wandered off.</h1>
        <p>
          The route may have moved, or it may be scaffolded for something that
          has not launched yet.
        </p>
        <Link className="btn btn--dark" href="/">
          Back to Marc's Hub
        </Link>
      </div>
    </main>
  );
}
