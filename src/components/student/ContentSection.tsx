import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  delay?: number;
}

export const ContentSection = ({ title, icon, children, delay = 0 }: ContentSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-primary">{icon}</div>}
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {children}
      </div>
    </motion.div>
  );
};
