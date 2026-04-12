import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const tools = [
  { emoji: "🦈", name: "Wireshark" },
  { emoji: "🗺️", name: "Nmap" },
  { emoji: "🐉", name: "Kali Linux" },
  { emoji: "💥", name: "Metasploit" },
  { emoji: "🔬", name: "Autopsy" },
  { emoji: "📦", name: "VirtualBox" },
  { emoji: "🪟", name: "Windows Server" },
  { emoji: "🤖", name: "AI Tools" },
];

const ToolsSection = () => (
  <section id="tools" className="py-20 px-6 md:px-10 max-w-[1000px] mx-auto">
    <SectionHeader label="My Arsenal" title="Tools &" highlight="Technologies" />
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {tools.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
          className="bg-card border border-border rounded-xl py-5 px-3 text-center text-sm font-semibold text-foreground cursor-default hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:border-primary transition-all"
        >
          <span className="text-2xl block mb-1.5">{t.emoji}</span>
          {t.name}
        </motion.div>
      ))}
    </div>
  </section>
);

export default ToolsSection;
