import { Home, Briefcase, Users, Calendar, Trophy, Bell, Code, TestTube, BookOpen, Map } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const menuItems = [
  { icon: Home, title: "Home", path: "/" },
  { icon: Briefcase, title: "Govt Job Notifications", path: "#govt-jobs" },
  { icon: Briefcase, title: "Placement Links", path: "#placement" },
  { icon: Users, title: "Student", path: "#student" },
  { icon: Calendar, title: "External Exams", path: "#exams" },
  { icon: Trophy, title: "Results", path: "#results" },
  { icon: Bell, title: "Noticeboard", path: "#notices" },
  { icon: Code, title: "Technical Club", path: "#tech-club" },
  { icon: TestTube, title: "Online Tests", path: "#tests" },
  { icon: BookOpen, title: "TCS NQT", path: "#tcs-nqt" },
  { icon: Code, title: "Python Programming", path: "#python" },
  { icon: Map, title: "Roadmap", path: "#roadmap" },
];

export const StudentSidebar = () => {
  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-card/95 backdrop-blur-md border-r border-border overflow-y-auto z-40"
    >
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.title}
              href={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{item.title}</span>
            </motion.a>
          );
        })}
      </nav>
    </motion.aside>
  );
};
