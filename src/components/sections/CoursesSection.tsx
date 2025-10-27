import { motion } from "framer-motion";
import { Code, Cpu, Zap, Wrench, Building, Lightbulb, Brain, Factory, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Computer Science & Engineering",
    short: "CSE",
    icon: Code,
    description: "Master software development, AI, and cutting-edge computing technologies"
  },
  {
    title: "Electronics & Communication",
    short: "ECE",
    icon: Cpu,
    description: "Explore embedded systems, IoT, and wireless communication"
  },
  {
    title: "Electrical Engineering",
    short: "EE",
    icon: Zap,
    description: "Power systems, renewable energy, and electrical automation"
  },
  {
    title: "Mechanical Engineering",
    short: "ME",
    icon: Wrench,
    description: "Design, manufacturing, and thermal engineering solutions"
  },
  {
    title: "Civil Engineering",
    short: "CE",
    icon: Building,
    description: "Infrastructure, construction management, and urban planning"
  },
  {
    title: "AI & Data Science",
    short: "AI&DS",
    icon: Brain,
    description: "Machine learning, deep learning, and big data analytics"
  },
  {
    title: "Information Technology",
    short: "IT",
    icon: Lightbulb,
    description: "Web development, cloud computing, and cybersecurity"
  },
  {
    title: "Industrial Engineering",
    short: "IE",
    icon: Factory,
    description: "Process optimization, supply chain, and operations management"
  }
];

const CoursesSection = () => {
  return (
    <section id="courses" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Academic Programs</span>
            <h2 className="section-title">Explore Our Courses & Branches</h2>
            <p className="section-subtitle">
              Choose from our premium engineering programs crafted for tomorrow's innovators and industry leaders.
            </p>
          </motion.div>

          {/* Course Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {courses.map((course, index) => {
              const Icon = course.icon;
              
              return (
                <motion.div
                  key={course.short}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="card-professional p-6 h-full cursor-pointer group"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-corporate flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-xs font-bold text-foreground mb-4">
                      {course.short}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {course.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-corporate inline-flex items-center gap-2"
            >
              View All Programs & Branches
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
