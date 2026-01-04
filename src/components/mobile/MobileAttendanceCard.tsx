import { motion } from "framer-motion";
import { Check, X, ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface AttendanceRecord {
  date: string;
  status: "P" | "A";
  hour: number;
  subject?: string;
}

interface MobileAttendanceCardProps {
  rollNo: string;
  studentName: string;
  attendance: AttendanceRecord[];
  percentage: number;
  isSelected?: boolean;
  onSelect?: (selected: boolean) => void;
  onClick?: () => void;
}

const MobileAttendanceCard = ({
  rollNo,
  studentName,
  attendance,
  percentage,
  isSelected,
  onSelect,
  onClick,
}: MobileAttendanceCardProps) => {
  const presentCount = attendance.filter((a) => a.status === "P").length;
  const absentCount = attendance.filter((a) => a.status === "A").length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-card border rounded-2xl p-4 ${
        isSelected ? "border-primary ring-2 ring-primary/20" : "border-border"
      }`}
    >
      <div className="flex items-start gap-3">
        {onSelect && (
          <Checkbox
            checked={isSelected}
            onCheckedChange={onSelect}
            className="mt-1"
          />
        )}

        <div className="flex-1 min-w-0" onClick={onClick}>
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="min-w-0">
              <p className="text-sm font-bold text-foreground truncate">
                {rollNo}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {studentName}
              </p>
            </div>
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
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-green-400" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {presentCount}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-3.5 h-3.5 text-red-400" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {absentCount}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              Total: {attendance.length} classes
            </span>
          </div>

          {/* Recent Attendance Preview */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {attendance.slice(-10).map((record, idx) => (
              <div
                key={idx}
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  record.status === "P"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {record.status}
              </div>
            ))}
            {onClick && (
              <button className="w-7 h-7 rounded-lg flex items-center justify-center bg-muted flex-shrink-0">
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileAttendanceCard;
