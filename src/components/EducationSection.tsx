import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const courses = ["Cybersecurity", "Networking", "Operating Systems", "Algorithm Analysis", "HPC (IT313)", "Advanced Databases (COM314)", "Entrepreneurship (CU315)"];

const EducationSection = () => (
  <section id="education" className="py-20 px-6 md:px-10 max-w-[1000px] mx-auto">
    <SectionHeader label="My Background" title="My" highlight="Education" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded-2xl p-7 md:p-8 flex gap-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5 transition-all"
    >
      <div className="w-13 h-13 rounded-xl bg-secondary flex items-center justify-center text-2xl flex-shrink-0">
        🎓
      </div>
      <div>
        <h4 className="font-bold text-foreground">Bachelor of Science in Computer Science</h4>
        <p className="text-muted-foreground text-sm mt-1">Cavendish University · Lusaka, Zambia</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {courses.map((c) => (
            <span key={c} className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full font-medium">
              {c}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default EducationSection;
