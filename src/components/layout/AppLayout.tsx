import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileBottomNav from "./MobileBottomNav";

interface AppLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  showBottomNav?: boolean;
}

const AppLayout = ({ 
  children, 
  showFooter = true, 
  showBottomNav = true 
}: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <Header />
      
      <main className="pb-20 md:pb-0">
        {children}
      </main>
      
      {showFooter && <Footer />}
      {showBottomNav && <MobileBottomNav />}
    </div>
  );
};

export default AppLayout;
