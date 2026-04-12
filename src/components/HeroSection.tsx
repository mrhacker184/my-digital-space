import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import abrahamPhoto from "@/assets/abraham-photo.jpeg";

const roles = ["CS Student", "Cybersecurity Enthusiast", "Future IT Professional", "Tech Explorer"];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(role.slice(0, text.length + 1));
          if (text.length + 1 === role.length) setTimeout(() => setDeleting(true), 1500);
        } else {
          setText(role.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setRoleIdx((i) => (i + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center text-center px-6 md:px-10 pt-24 pb-16 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Photo */}
        <div className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-primary-foreground/30 overflow-hidden shadow-lg animate-pulse-ring">
          <img src={abrahamPhoto} alt="Abraham M." className="w-full h-full object-cover object-top" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3 tracking-tight">
          Abraham M.
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 mb-2 min-h-[1.5em]">
          {text}
          <span className="inline-block w-0.5 h-[1.1em] bg-primary-foreground ml-0.5 animate-pulse align-text-bottom" />
        </p>

        <p className="text-primary-foreground/60 text-sm mb-8">
          📍 Lusaka, Zambia · Cavendish University
        </p>

        <div className="flex gap-3.5 justify-center flex-wrap">
          <a
            href="#about"
            className="px-7 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 transition-all"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="px-7 py-3 bg-transparent text-primary-foreground border-2 border-primary-foreground/40 rounded-lg font-semibold text-sm hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
