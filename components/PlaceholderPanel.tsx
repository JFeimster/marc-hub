export function PlaceholderPanel({
  title,
  body,
  accent = "yellow",
}: {
  title: string;
  body: string;
  accent?: "yellow" | "green" | "blue" | "pink";
}) {
  return (
    <div className={`placeholder-panel placeholder-panel--${accent}`}>
      <div className="eyebrow">Scaffolded</div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
