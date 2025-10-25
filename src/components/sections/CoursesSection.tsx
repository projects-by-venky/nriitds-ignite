import { Code, Cpu, Database, Brain, Rocket, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CoursesSection = () => {
  const courses = [
    {
      icon: Code,
      title: "Computer Science",
      description: "Master programming, algorithms, and software development with industry-standard tools.",
      duration: "4 Years",
      students: "1200+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Explore machine learning, deep learning, and neural networks with hands-on projects.",
      duration: "4 Years",
      students: "800+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Analyze data, build models, and extract insights using advanced analytics techniques.",
      duration: "4 Years",
      students: "950+",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Cpu,
      title: "Electronics & Comm.",
      description: "Design circuits, IoT systems, and embedded solutions for modern technology.",
      duration: "4 Years",
      students: "700+",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Rocket,
      title: "Mechanical Engineering",
      description: "Innovation in design, manufacturing, and automation with cutting-edge technology.",
      duration: "4 Years",
      students: "850+",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Briefcase,
      title: "Business Management",
      description: "Develop leadership, strategy, and entrepreneurial skills for the business world.",
      duration: "2-3 Years",
      students: "600+",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Explore Our Courses
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from a wide range of undergraduate and postgraduate programs designed for the future.
            </p>
          </div>

          {/* 3D Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card 
                key={index}
                className="relative gradient-card border-2 border-primary/20 hover:border-primary/50 shadow-elegant hover:shadow-3d transition-all duration-500 hover:scale-105 hover:-translate-y-4 group cursor-pointer overflow-hidden"
              >
                {/* 3D Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 shadow-3d group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}>
                    <course.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3 font-bold group-hover:text-primary transition-colors">{course.title}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs font-semibold bg-primary/10 hover:bg-primary/20">{course.duration}</Badge>
                    <Badge variant="outline" className="text-xs font-semibold border-primary/30">{course.students} Students</Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  <Button variant="ghost" className="w-full group-hover:bg-gradient-3d group-hover:text-white transition-all duration-300 font-semibold">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-16">
            <Button size="lg" className="bg-gradient-3d text-white hover:scale-110 shadow-3d transition-all duration-300 px-10 py-6 text-lg font-bold">
              View All Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
