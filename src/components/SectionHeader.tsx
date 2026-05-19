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
  return (
    <div className="max-w-4xl">
      <span className={light ? "tag tag-light" : "tag"}>{tag}</span>
      <h2 className="section-title text-slate-950">{title}</h2>
      {text ? (
        <div className="language-pair section-text">
          <p className="ro">{text}</p>
          {textEn ? <p className="en">{textEn}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
