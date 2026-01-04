import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface SubjectAttendance {
  code: string;
  name: string;
  conducted: number;
  attended: number;
}

interface MobileMonthlyCardProps {
  rollNumber: string;
  subjects: SubjectAttendance[];
  totalConducted: number;
  totalAttended: number;
  percentage: number;
}

const MobileMonthlyCard = ({
  rollNumber,
  subjects,
  totalConducted,
  totalAttended,
  percentage,
}: MobileMonthlyCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-2xl overflow-hidden"
    >
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="min-w-0">
            <p className="text-sm font-bold text-foreground text-left">
              {rollNumber}
            </p>
            <p className="text-xs text-muted-foreground">
              {totalAttended}/{totalConducted} classes
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`px-3 py-1.5 rounded-full text-sm font-bold ${
              percentage >= 75
                ? "bg-green-500/20 text-green-400"
                : percentage >= 65
                ? "bg-yellow-500/20 text-yellow-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {percentage}%
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </button>

      {/* Expandable Subject Details */}
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-border"
        >
          <div className="p-4 space-y-3">
            {subjects.map((subject, idx) => {
              const subjectPercentage = Math.round(
                (subject.attended / subject.conducted) * 100
              );
              return (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground truncate">
                      {subject.code}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {subject.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-right">
                    <span className="text-xs text-muted-foreground">
                      {subject.attended}/{subject.conducted}
                    </span>
                    <span
                      className={`text-sm font-bold min-w-[45px] text-right ${
                        subjectPercentage >= 75
                          ? "text-green-400"
                          : subjectPercentage >= 65
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {subjectPercentage}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MobileMonthlyCard;
