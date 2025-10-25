import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, BookOpen, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-1000">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

      {/* 3D Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl animate-float-rotate bg-gradient-to-br from-primary/30 to-accent/30"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl animate-float bg-gradient-to-br from-secondary/30 to-primary-glow/30" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full blur-2xl animate-float-rotate bg-gradient-to-br from-accent/20 to-primary/20" style={{ animationDelay: "4s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-8 animate-scale-in shadow-glow">
            <Sparkles className="w-5 h-5 text-primary-glow animate-glow-pulse" />
            <span className="text-sm font-semibold text-white">AI-Powered 3D Education Platform</span>
          </div>

          {/* 3D Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 animate-slide-up leading-tight">
            <span className="block text-3d mb-2">Welcome to</span>
            <span className="block text-7xl md:text-9xl bg-gradient-to-r from-primary-glow via-accent to-secondary bg-clip-text text-transparent animate-text-glow drop-shadow-2xl">
              NRIITDS
            </span>
            <span className="block text-4xl md:text-5xl text-white/90 mt-2 font-light">College</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto animate-slide-up font-light" style={{ animationDelay: "0.2s" }}>
            Empowering minds, shaping futures. Experience world-class education with cutting-edge <span className="font-semibold text-primary-glow">AI-driven learning</span> and futuristic technology.
          </p>

          {/* 3D CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-gradient-3d text-white hover:scale-105 shadow-3d transition-all duration-300 group px-8 py-6 text-lg font-semibold">
              Explore Courses
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button size="lg" className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold">
              Virtual Tour
            </Button>
          </div>

          {/* 3D Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-3d group">
              <BookOpen className="w-10 h-10 text-primary-glow mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-black text-white mb-2">50+</div>
              <div className="text-white/90 text-sm font-medium">Courses Offered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-3d group">
              <Users className="w-10 h-10 text-secondary mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-black text-white mb-2">5000+</div>
              <div className="text-white/90 text-sm font-medium">Active Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-3d group">
              <Sparkles className="w-10 h-10 text-accent mb-4 mx-auto group-hover:scale-110 transition-transform animate-glow-pulse" />
              <div className="text-4xl font-black text-white mb-2">95%</div>
              <div className="text-white/90 text-sm font-medium">Placement Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
