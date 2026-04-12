interface Props {
  label: string;
  title: string;
  highlight?: string;
}

const SectionHeader = ({ label, title, highlight }: Props) => (
  <div className="text-center mb-10">
    <p className="text-xs font-bold text-primary tracking-[2px] uppercase mb-2">{label}</p>
    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
      {title} {highlight && <span className="text-primary">{highlight}</span>}
    </h2>
  </div>
);

export default SectionHeader;
