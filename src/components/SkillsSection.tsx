import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skills = [
  { icon: "🔐", name: "Cybersecurity", tag: "Practical & Theory", pct: 85 },
  { icon: "🌐", name: "Networking", tag: "Protocols & Config", pct: 80 },
  { icon: "🖥️", name: "Operating Systems", tag: "Linux & Windows", pct: 82 },
  { icon: "📊", name: "Algorithm Analysis", tag: "Big-O, Sorting", pct: 75 },
  { icon: "🗄️", name: "Advanced Databases", tag: "SQL & COM314", pct: 78 },
  { icon: "⚡", name: "High Performance Computing", tag: "Clusters & GPU", pct: 70 },
  { icon: "🔍", name: "Digital Forensics", tag: "Autopsy & Evidence", pct: 77 },
  { icon: "💼", name: "Entrepreneurship", tag: "CU315", pct: 72 },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 px-6 md:px-10 max-w-[1000px] mx-auto">
    <SectionHeader label="What I Know" title="My" highlight="Skills" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {skills.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
          className="bg-card border border-border rounded-xl p-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary transition-all cursor-default"
        >
          <div className="text-3xl mb-2.5">{s.icon}</div>
          <div className="font-bold text-sm text-foreground mb-1">{s.name}</div>
          <div className="text-xs text-muted-foreground">{s.tag}</div>
          <div className="h-1 bg-muted rounded-full mt-3 overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${s.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
