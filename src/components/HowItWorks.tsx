import { Camera, Sparkles, MapPin } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Scan & Store",
    description:
      "Take a photo of your item and the location. Our AI does the rest—no manual tagging needed.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "AI Organizes",
    description:
      "Smart categorization learns your habits and creates an intelligent inventory system automatically.",
  },
  {
    icon: MapPin,
    step: "03",
    title: "Ask & Find",
    description:
      'Simply ask "Where are my Christmas lights?" and get guided to the exact spot with voice directions.',
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to never lose anything again
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-5xl font-bold text-primary/20">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
