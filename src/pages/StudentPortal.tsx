import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, BookOpen, Calendar, ClipboardList, MessageSquare, ActivitySquare, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import { useState } from "react";
import { cn } from "@/lib/utils";

const departments = {
  cse: { name: "Computer Science & Engineering", code: "CSE" },
  ece: { name: "Electronics & Communication", code: "ECE" },
  eee: { name: "Electrical & Electronics", code: "EEE" },
  mech: { name: "Mechanical Engineering", code: "MECH" },
  civil: { name: "Civil Engineering", code: "CIVIL" },
  aids: { name: "AI & Data Science", code: "DS" },
  mba: { name: "Business Administration", code: "MBA" },
  mca: { name: "Computer Applications", code: "MCA" }
};

// Mobile-friendly Action Button
const ActionButton = ({ 
  label, 
  onClick, 
  href, 
  variant = "primary", 
  download = false 
}: { 
  label: string; 
  onClick?: () => void; 
  href?: string; 
  variant?: "primary" | "secondary"; 
  download?: boolean;
}) => {
  const baseClasses = "w-full px-4 py-3 md:py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 touch-target";
  const variantClasses = variant === "primary" 
    ? "bg-gradient-to-r from-[#0EA5E9] to-[#1E3A8A] text-white hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98]"
    : "bg-card/60 border border-border text-foreground hover:bg-card hover:border-primary/50 active:scale-[0.98]";

  if (href) {
    return (
      <a 
        href={href} 
        target={download ? undefined : "_blank"} 
        rel={download ? undefined : "noopener noreferrer"} 
        download={download}
        className={cn(baseClasses, variantClasses)}
      >
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cn(baseClasses, variantClasses)}>
      {label}
    </button>
  );
};

// Mobile-friendly Section Card with Accordion
const ContentSection = ({ 
  title, 
  icon, 
  children, 
  defaultOpen = false 
}: { 
  title: string; 
  icon: React.ReactNode; 
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card/80 backdrop-blur-md border border-border rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 md:px-6 md:py-5 flex items-center justify-between hover:bg-card/90 transition-colors touch-target"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#1E3A8A] flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <h3 className="text-base md:text-xl font-bold text-foreground text-left">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-4 pb-4 md:px-6 md:pb-6"
        >
          <div className="pt-3 md:pt-4 border-t border-border/50">
            {children}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

// Year/Semester Section with responsive grid
const YearSemesterSection = ({ 
  years, 
  deptId 
}: { 
  years: Array<{
    year: string;
    semesters: Array<{
      semester: string;
      items: Array<{ label: string; onClick?: () => void; href?: string; variant?: "primary" | "secondary" }>;
    }>;
  }>;
  deptId?: string;
}) => {
  const [expandedYear, setExpandedYear] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {years.map((yearData) => (
        <div key={yearData.year} className="border border-border/50 rounded-xl overflow-hidden">
          <button
            onClick={() => setExpandedYear(expandedYear === yearData.year ? null : yearData.year)}
            className="w-full px-4 py-3 flex items-center justify-between bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <span className="font-semibold text-sm md:text-base text-foreground">{yearData.year}</span>
            {expandedYear === yearData.year ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
          
          {expandedYear === yearData.year && (
            <div className="p-3 md:p-4 space-y-4">
              {yearData.semesters.map((sem) => (
                <div key={sem.semester}>
                  <h5 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">{sem.semester}</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {sem.items.map((item, idx) => (
                      <ActionButton 
                        key={idx} 
                        label={item.label} 
                        onClick={item.onClick}
                        href={item.href}
                        variant={item.variant || "secondary"}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const StudentPortal = () => {
  const { deptId } = useParams<{ deptId: string }>();
  const navigate = useNavigate();
  const dept = deptId ? departments[deptId as keyof typeof departments] : null;
  const deptCode = dept?.code || "DS";

  if (!dept) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Department Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const sections = ["A", "B", "C"];

  // Subject Notes/Materials data
  const notesData = [
    {
      year: "1st Year",
      semesters: [
        { semester: "1-1 Semester", items: [{ label: `1-1 ${deptCode} Notes`, onClick: () => navigate(`/department/${deptId}/notes/1-1`) }] },
        { semester: "1-2 Semester", items: [{ label: `1-2 ${deptCode} Notes`, onClick: () => navigate(`/department/${deptId}/notes/1-2`) }] },
      ]
    },
    {
      year: "2nd Year",
      semesters: [
        { semester: "2-1 Semester", items: [{ label: `2-1 ${deptCode} Notes`, onClick: () => navigate(`/department/${deptId}/notes/2-1`) }] },
        { semester: "2-2 Semester", items: [{ label: `2-2 ${deptCode} Notes`, onClick: () => navigate(`/department/${deptId}/notes/2-2`) }] },
      ]
    },
    {
      year: "3rd Year",
      semesters: [
        { semester: "3-1 Semester", items: [{ label: `3-1 ${deptCode} Notes`, onClick: () => navigate(`/department/${deptId}/notes/3-1`) }] },
        { semester: "3-2 Semester", items: [{ label: `3-2 ${deptCode} Notes`, onClick: () => navigate(`/department/${deptId}/notes/3-2`) }] },
      ]
    },
    {
      year: "4th Year",
      semesters: [
        { semester: "4-1 Semester", items: [{ label: `4-1 ${deptCode} Notes`, onClick: () => navigate(`/department/${deptId}/notes/4-1`) }] },
        { semester: "4-2 Semester", items: [{ label: `4-2 ${deptCode} Notes`, onClick: () => navigate(`/department/${deptId}/notes/4-2`) }] },
      ]
    },
  ];

  // Hourly Attendance data
  const hourlyAttendanceData = [
    {
      year: "1st Year",
      semesters: [
        { semester: "1-1 Semester", items: sections.map(sec => ({ label: `1-1 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/attendance/1-1-${deptCode}-${sec}`) })) },
        { semester: "1-2 Semester", items: sections.map(sec => ({ label: `1-2 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/attendance/1-2-${deptCode}-${sec}`) })) },
      ]
    },
    {
      year: "2nd Year",
      semesters: [
        { semester: "2-1 Semester", items: sections.map(sec => ({ label: `2-1 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/attendance/2-1-${deptCode}-${sec}`) })) },
        { semester: "2-2 Semester", items: sections.map(sec => ({ label: `2-2 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/attendance/2-2-${deptCode}-${sec}`) })) },
      ]
    },
    {
      year: "3rd Year",
      semesters: [
        { semester: "3-1 Semester", items: sections.map(sec => ({ label: `3-1 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/attendance/3-1-${deptCode}-${sec}`) })) },
        { semester: "3-2 Semester", items: sections.map(sec => ({ label: `3-2 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/attendance/3-2-${deptCode}-${sec}`) })) },
      ]
    },
    {
      year: "4th Year",
      semesters: [
        { semester: "4-1 Semester", items: sections.map(sec => ({ label: `4-1 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/attendance/4-1-${deptCode}-${sec}`) })) },
        { semester: "4-2 Semester", items: sections.map(sec => ({ label: `4-2 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/attendance/4-2-${deptCode}-${sec}`) })) },
      ]
    },
  ];

  // Monthly Attendance data
  const monthlyAttendanceData = [
    {
      year: "1st Year",
      semesters: [
        { semester: "1-1 Semester", items: sections.map(sec => ({ label: `1-1 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/monthly-attendance/1-1-${deptCode}-${sec}`) })) },
        { semester: "1-2 Semester", items: sections.map(sec => ({ label: `1-2 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/monthly-attendance/1-2-${deptCode}-${sec}`) })) },
      ]
    },
    {
      year: "2nd Year",
      semesters: [
        { semester: "2-1 Semester", items: sections.map(sec => ({ label: `2-1 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/monthly-attendance/2-1-${deptCode}-${sec}`) })) },
        { semester: "2-2 Semester", items: sections.map(sec => ({ label: `2-2 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/monthly-attendance/2-2-${deptCode}-${sec}`) })) },
      ]
    },
    {
      year: "3rd Year",
      semesters: [
        { semester: "3-1 Semester", items: sections.map(sec => ({ label: `3-1 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/monthly-attendance/3-1-${deptCode}-${sec}`) })) },
        { semester: "3-2 Semester", items: sections.map(sec => ({ label: `3-2 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/monthly-attendance/3-2-${deptCode}-${sec}`) })) },
      ]
    },
    {
      year: "4th Year",
      semesters: [
        { semester: "4-1 Semester", items: sections.map(sec => ({ label: `4-1 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/monthly-attendance/4-1-${deptCode}-${sec}`) })) },
        { semester: "4-2 Semester", items: sections.map(sec => ({ label: `4-2 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/monthly-attendance/4-2-${deptCode}-${sec}`) })) },
      ]
    },
  ];

  // Time Tables data
  const timeTablesData = [
    {
      year: "1st Year",
      semesters: [
        { semester: "1-1 Semester", items: sections.map(sec => ({ label: `1-1 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/timetable/1-1-${deptCode}-${sec}`) })) },
        { semester: "1-2 Semester", items: sections.map(sec => ({ label: `1-2 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/timetable/1-2-${deptCode}-${sec}`) })) },
      ]
    },
    {
      year: "2nd Year",
      semesters: [
        { semester: "2-1 Semester", items: sections.map(sec => ({ label: `2-1 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/timetable/2-1-${deptCode}-${sec}`) })) },
        { semester: "2-2 Semester", items: sections.map(sec => ({ label: `2-2 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/timetable/2-2-${deptCode}-${sec}`) })) },
      ]
    },
    {
      year: "3rd Year",
      semesters: [
        { semester: "3-1 Semester", items: sections.map(sec => ({ label: `3-1 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/timetable/3-1-${deptCode}-${sec}`) })) },
        { semester: "3-2 Semester", items: sections.map(sec => ({ label: `3-2 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/timetable/3-2-${deptCode}-${sec}`) })) },
      ]
    },
    {
      year: "4th Year",
      semesters: [
        { semester: "4-1 Semester", items: sections.map(sec => ({ label: `4-1 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/timetable/4-1-${deptCode}-${sec}`) })) },
        { semester: "4-2 Semester", items: sections.map(sec => ({ label: `4-2 ${deptCode}-${sec}`, onClick: () => navigate(`/department/${deptId}/timetable/4-2-${deptCode}-${sec}`) })) },
      ]
    },
  ];

  // Syllabus data
  const syllabusData = [
    {
      year: "1st & 2nd Year",
      semesters: [
        { semester: "All Semesters", items: [{ label: `${deptCode} Syllabus (R20)`, href: "/documents/CSE-DS-Syllabus.pdf" }] },
      ]
    },
    {
      year: "3rd & 4th Year",
      semesters: [
        { semester: "All Semesters", items: [{ label: `${deptCode} Syllabus (R20)`, href: "/documents/CSE-DS-3rd-Year-Syllabus.pdf" }] },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <Header />
      
      <main className="pt-16 md:pt-20 pb-24 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Back Button & Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 md:mb-8"
          >
            <Link 
              to={`/department/${deptId}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors touch-target justify-start"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Back to Department</span>
            </Link>
            
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #0EA5E9, #1E3A8A)" }}>
                Student Portal
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground">{dept.name}</p>
            </div>

            {/* Quick Action - Results */}
            <motion.a
              href="#"
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full md:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-gradient-cyber text-white rounded-xl font-bold shadow-[0_0_20px_hsl(217_91%_60%_/_0.4)] touch-target"
            >
              23KP_2.2 Results → Click Here
            </motion.a>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-4 md:space-y-6">
            {/* Notes */}
            <ContentSection title="Subject Notes & Materials" icon={<FileText className="w-5 h-5 md:w-6 md:h-6 text-white" />}>
              <YearSemesterSection years={notesData} deptId={deptId} />
            </ContentSection>

            {/* Guidelines */}
            <ContentSection title="Student Guidelines" icon={<BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />}>
              <ActionButton 
                label="Download DS Student Guidelines" 
                href="/documents/Guidelines_Student_DS.pdf"
                variant="primary"
                download
              />
            </ContentSection>

            {/* Hourly Attendance */}
            <ContentSection title="Hourly Attendance" icon={<ActivitySquare className="w-5 h-5 md:w-6 md:h-6 text-white" />}>
              <YearSemesterSection years={hourlyAttendanceData} deptId={deptId} />
            </ContentSection>

            {/* Monthly Attendance */}
            <ContentSection title="Monthly Cumulative Attendance" icon={<Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />}>
              <YearSemesterSection years={monthlyAttendanceData} deptId={deptId} />
            </ContentSection>

            {/* Time Tables */}
            <ContentSection title="Time Tables" icon={<ClipboardList className="w-5 h-5 md:w-6 md:h-6 text-white" />}>
              <YearSemesterSection years={timeTablesData} deptId={deptId} />
            </ContentSection>

            {/* Syllabus */}
            <ContentSection title="Syllabus" icon={<BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />}>
              <YearSemesterSection years={syllabusData} deptId={deptId} />
            </ContentSection>

            {/* Feedback */}
            <ContentSection title="Feedback" icon={<MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-white" />}>
              <p className="text-sm text-muted-foreground mb-4">Submit your feedback for better academic experience</p>
              <ActionButton 
                label="Submit Feedback" 
                variant="primary"
              />
            </ContentSection>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default StudentPortal;
