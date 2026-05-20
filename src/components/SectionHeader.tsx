export function SectionHeader({
  tag,
  title,
  text,
  textEn,
  light = false
}: {
  tag: string;
  title: string;
  text?: string;
  textEn?: string;
  light?: boolean;
}) {
  const body = textEn ? `${text} ${textEn}` : text;

  return (
    <div className="max-w-4xl">
      <span className={light ? "tag tag-light" : "tag"}>{tag}</span>
      <h2 className="section-title text-white">{title}</h2>
      {body ? <p className="section-text text-slate-300">{body}</p> : null}
    </div>
  );
}
