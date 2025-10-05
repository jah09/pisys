import { Card, CardContent } from "@/components/ui/card";
import { Brain, Bell, Package, Search } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Mom Assistant",
    description: "Ask where anything is and get instant voice-guided answers. Like having your mom's memory, but digital.",
  },
  {
    icon: Package,
    title: "Smart Inventory",
    description: "Scan items with your phone. Our AI automatically categorizes and remembers where you stored everything.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Get notified when you need to restock items or when seasonal items should be stored away.",
  },
  {
    icon: Search,
    title: "Visual Search",
    description: "Take a photo of what you're looking for. Our AI will guide you to the exact location.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Storage,
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Supercharged</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features that make organization effortless and finding things instant.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/40 transition-all duration-300 hover:shadow-soft group"
            >
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
