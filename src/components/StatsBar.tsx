const stats = [
  { num: "5+", label: "Lab Projects" },
  { num: "8+", label: "Technical Skills" },
  { num: "7+", label: "Tools Mastered" },
  { num: "🇿🇲", label: "Based in Zambia" },
];

const StatsBar = () => (
  <div className="hero-gradient py-6 px-6 md:px-10 flex justify-center gap-10 md:gap-16 flex-wrap">
    {stats.map((s) => (
      <div key={s.label} className="text-center text-primary-foreground">
        <div className="text-3xl font-extrabold text-primary">{s.num}</div>
        <div className="text-xs text-primary-foreground/50 mt-0.5">{s.label}</div>
      </div>
    ))}
  </div>
);

export default StatsBar;
