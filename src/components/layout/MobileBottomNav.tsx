import { Home, Calendar, ClipboardList, User, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  icon: React.ElementType;
  label: string;
  path: string;
}

const MobileBottomNav = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Calendar, label: "Schedule", path: "/branches" },
    { icon: ClipboardList, label: "Attendance", path: "/attendance" },
    { icon: User, label: "Profile", path: "/about" },
  ];

  const moreMenuItems = [
    { label: "Research", path: "/research" },
    { label: "Events", path: "/events" },
    { label: "Courses", path: "/courses" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-lg border-t border-border safe-area-bottom"
    >
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center flex-1 h-full"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <div
                  className={`p-1.5 rounded-xl transition-all ${
                    active ? "bg-primary/20" : ""
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}

        {/* More Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <button className="flex flex-col items-center justify-center flex-1 h-full">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center justify-center gap-1 text-muted-foreground"
              >
                <div className="p-1.5 rounded-xl">
                  <Menu className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium">More</span>
              </motion.div>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-3xl pb-safe">
            <div className="py-4">
              <h3 className="text-lg font-semibold mb-4 text-center">More Options</h3>
              <div className="grid grid-cols-3 gap-4">
                {moreMenuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};

export default MobileBottomNav;
