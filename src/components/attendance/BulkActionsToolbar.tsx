import { Bell, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BulkActionsToolbarProps {
  selectedCount: number;
  onClearSelection: () => void;
  onSendNotifications: () => void;
  onMarkAttendance: (status: "P" | "A") => void;
}

export const BulkActionsToolbar = ({
  selectedCount,
  onClearSelection,
  onSendNotifications,
  onMarkAttendance,
}: BulkActionsToolbarProps) => {
  const [attendanceStatus, setAttendanceStatus] = useState<"P" | "A">("P");

  if (selectedCount === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-primary text-primary-foreground rounded-lg p-4 mb-4 shadow-lg"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-foreground text-primary flex items-center justify-center font-semibold">
                {selectedCount}
              </div>
              <span className="font-medium">
                {selectedCount} {selectedCount === 1 ? "student" : "students"} selected
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearSelection}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="w-4 h-4 mr-1" />
              Clear
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Mark Attendance */}
            <div className="flex items-center gap-2">
              <Select
                value={attendanceStatus}
                onValueChange={(value) => setAttendanceStatus(value as "P" | "A")}
              >
                <SelectTrigger className="w-[120px] bg-primary-foreground text-primary border-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="P">Present</SelectItem>
                  <SelectItem value="A">Absent</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onMarkAttendance(attendanceStatus)}
              >
                <Check className="w-4 h-4 mr-2" />
                Mark
              </Button>
            </div>

            {/* Send Notifications */}
            <Button
              variant="secondary"
              size="sm"
              onClick={onSendNotifications}
            >
              <Bell className="w-4 h-4 mr-2" />
              Notify
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
