import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const cards = [
  { icon: "👨‍💻", title: "CS Student", desc: "Studying Computer Science at Cavendish University in Lusaka, Zambia. My coursework covers cybersecurity, networking, databases, algorithms, and more." },
  { icon: "🔐", title: "Security Focused", desc: "Passionate about hands-on cybersecurity — from network traffic analysis with Wireshark to penetration testing with Metasploit and digital forensics with Autopsy." },
  { icon: "🚀", title: "Career Goals", desc: "Looking to contribute to the growing IT and tech sector in Zambia. Targeting entry-level roles where I can apply my practical skills and keep learning." },
  { icon: "🤖", title: "Tech Enthusiast", desc: "Interested in how AI can be integrated into businesses and excited about the future of technology in Africa." },
];

const AboutSection = () => (
  <section id="about" className="py-20 px-6 md:px-10 max-w-[1000px] mx-auto">
    <SectionHeader label="Who I Am" title="About" highlight="Me" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="bg-card border border-border rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5 transition-all"
        >
          <div className="text-3xl mb-3">{c.icon}</div>
          <h4 className="font-bold text-foreground mb-2">{c.title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default AboutSection;
