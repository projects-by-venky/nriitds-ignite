import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Calendar, Award, Bell, User, FileText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const departments = {
  cse: { name: "Computer Science & Engineering", gradient: "linear-gradient(135deg, #0EA5E9, #6366F1)" },
  ece: { name: "Electronics & Communication", gradient: "linear-gradient(135deg, #F97316, #F59E0B)" },
  eee: { name: "Electrical & Electronics", gradient: "linear-gradient(135deg, #22C55E, #10B981)" },
  mech: { name: "Mechanical Engineering", gradient: "linear-gradient(135deg, #475569, #94A3B8)" },
  civil: { name: "Civil Engineering", gradient: "linear-gradient(135deg, #0D9488, #14B8A6)" },
  aids: { name: "AI & Data Science", gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)" },
  mba: { name: "Business Administration", gradient: "linear-gradient(135deg, #2563EB, #3B82F6)" },
  mca: { name: "Computer Applications", gradient: "linear-gradient(135deg, #9333EA, #DB2777)" }
};

const sections = [
  { icon: Calendar, title: "Dashboard", desc: "Attendance & Timetable" },
  { icon: BookOpen, title: "Notes & Materials", desc: "Study Resources" },
  { icon: Award, title: "Results", desc: "Marks & Performance" },
  { icon: Bell, title: "Events & Circulars", desc: "Latest Updates" },
  { icon: FileText, title: "Assignments", desc: "Pending Tasks" },
  { icon: User, title: "Profile", desc: "Manage Settings" }
];

const StudentPortal = () => {
  const { deptId } = useParams<{ deptId: string }>();
  const dept = deptId ? departments[deptId as keyof typeof departments] : null;

  if (!dept) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Department Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link to={`/department/${deptId}`}>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Department
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-black mb-4 bg-clip-text text-transparent"
                style={{ backgroundImage: dept.gradient }}>
              Student Portal
            </h1>
            <p className="text-xl text-foreground/70">{dept.name}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group cursor-pointer"
                >
                  <div 
                    className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity bg-primary"
                  />
                  <div className="relative bg-card/80 backdrop-blur-md border-2 border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all h-full">
                    <div 
                      className="w-14 h-14 rounded-xl bg-gradient-cyber flex items-center justify-center mb-4"
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{section.title}</h3>
                    <p className="text-foreground/60">{section.desc}</p>
                    <div className="mt-4 text-primary font-semibold text-sm">
                      Access →
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentPortal;
