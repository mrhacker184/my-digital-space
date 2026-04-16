import { motion } from "framer-motion";

const ContactSection = () => (
  <section id="contact" className="py-20 px-6 md:px-10 max-w-[1000px] mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="contact-gradient rounded-2xl p-10 md:p-14 text-center text-primary-foreground"
    >
      <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Let's Connect 🤝</h3>
      <p className="text-primary-foreground/80 mb-7">
        Open to entry-level IT and cybersecurity opportunities in Zambia.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a href="tel:+260776336399" className="px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/20 transition-all">
          📞 Call Me
        </a>
        <a href="https://wa.me/260776336399" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/20 transition-all">
          💬 WhatsApp
        </a>
        <a href="mailto:abrahamkasese92@gmail.com" className="px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/20 transition-all">
          ✉️ Email Me
        </a>
        <a href="https://zm.linkedin.com/in/abraham-kasese-403708351" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/20 transition-all">
          💼 LinkedIn
        </a>
        <a href="https://github.com/mrhacker184" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/20 transition-all">
          🐙 GitHub
        </a>
      </div>
    </motion.div>
  </section>
);

export default ContactSection;
