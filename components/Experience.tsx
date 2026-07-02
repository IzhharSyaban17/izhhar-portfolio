"use client";
import { motion } from "framer-motion";
import { Code, Trophy, Award, GraduationCap, BookOpen } from "lucide-react";
import { TracingBeam } from "@/components/ui/aceternity/tracing-beam";
import { Timeline } from "@/components/ui/aceternity/timeline";
import { timeline } from "@/data/personal";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Trophy,
  Award,
  GraduationCap,
  BookOpen,
};

const colorConfig: Record<string, { text: string; bg: string; border: string; dot: string }> = {
  gold:    { text: "text-gold",    bg: "bg-gold/10",       border: "border-gold/20",      dot: "bg-gold" },
  cyan:    { text: "text-cyan-400", bg: "bg-cyan-400/10",   border: "border-cyan-400/20",  dot: "bg-cyan-400" },
  orange:  { text: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20", dot: "bg-orange-400" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", dot: "bg-emerald-400" },
  blue:    { text: "text-blue-400",  bg: "bg-blue-400/10",   border: "border-blue-400/20",  dot: "bg-blue-400" },
};

export default function Experience() {
  const timelineData = timeline.map((entry) => {
    const Icon = iconMap[entry.icon] || BookOpen;
    const cc = colorConfig[entry.color] || colorConfig.gold;

    return {
      title: entry.year,
      content: (
        <div className="space-y-4">
          <div className="glass rounded-[2rem] p-6 md:p-8 group hover:border-gold/30 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-xl shrink-0 ${cc.bg} ${cc.border} border`}>
                <Icon className={`w-6 h-6 ${cc.text}`} />
              </div>
              <div>
                <span className={`${cc.text} text-xs font-bold uppercase tracking-widest`}>{entry.year}</span>
                <h4 className="text-xl font-heading font-bold text-white mt-1">{entry.title}</h4>
                <p className="text-slate-400 text-sm">{entry.subtitle}</p>
              </div>
            </div>
            <ul className="space-y-2 text-slate-400 text-sm ml-2">
              {entry.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${cc.dot}`} />
                  {desc}
                </li>
              ))}
            </ul>
            {entry.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ),
    };
  });

  return (
    <section id="experience" className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 italic">
            &mdash; REKAM JEJAK
          </h4>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-tight text-white">
            Perjalanan <span className="text-gold">Saya</span>.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Dari kode hingga matras taekwondo, setiap langkah adalah pelajaran yang membentuk siapa saya hari ini.
          </p>
        </motion.div>
      </div>

      <TracingBeam className="px-6">
        <Timeline data={timelineData} />
      </TracingBeam>
    </section>
  );
}
