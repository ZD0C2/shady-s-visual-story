import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <span className="section-number">{number}</span>
      <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-3 max-w-xl">{subtitle}</p>}
    </motion.div>
  );
}
