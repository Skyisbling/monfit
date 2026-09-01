type PagePlaceholderProps = {
  title: string;
  description: string;
};

export default function PagePlaceholder({
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <div className="page-placeholder">
      <p className="eyebrow dark">MONFIT</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}