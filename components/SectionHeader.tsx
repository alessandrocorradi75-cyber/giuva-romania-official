export function SectionHeader({
  tag,
  title,
  text,
  light = false
}: {
  tag: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-4xl">
      <span className={light ? "tag tag-light" : "tag"}>{tag}</span>
      <h2 className={light ? "section-title text-slate-950" : "section-title text-white"}>{title}</h2>
      {text ? <p className={light ? "section-text text-slate-600" : "section-text text-slate-300"}>{text}</p> : null}
    </div>
  );
}
