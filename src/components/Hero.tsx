import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-storage.jpg";

export const Hero = () => {
  const scrollToQR = () => {
    const el = document.getElementById("qr-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(245_100%_69%/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(0_100%_71%/0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 backdrop-blur-sm border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Powered by AI
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Never Lose
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Anything Again
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl">
              Your personal AI Mom remembers where everything is. From tools in
              the garage to holiday decorations in the attic, find it all in
              seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                className="group"
                onClick={scrollToQR}
              >
                Download Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">
                  Items Organized
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20" />
            <img
              src={heroImage}
              alt="AI-organized storage system"
              className="relative rounded-3xl shadow-glow w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
