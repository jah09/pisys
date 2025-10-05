import { Button } from "@/components/ui/button";
import { Smartphone, Apple } from "lucide-react";
import qrImage from "@/assets/qr-placeholder.jpg";

export const QRSection = () => {
  return (
    <section id="qr-section" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-card rounded-3xl shadow-glow border-2 border-primary/10 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="p-8 md:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-primary/20">
                <Smartphone className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Available Now</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold">
                Get Started in
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Seconds
                </span>
              </h2>

              <p className="text-lg text-muted-foreground">
                Download the app and transform your storage organization today.
                Available for iOS and Android.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button variant="default" size="lg" className="gap-2">
                  <Apple className="w-5 h-5" />
                  App Store
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Play Store
                </Button>
              </div>
            </div>

            {/* Right QR */}
            <div className="bg-accent/30 p-8 md:p-12 flex flex-col items-center justify-center">
              <div className="bg-card p-6 rounded-2xl shadow-soft">
                <img
                  src={qrImage}
                  alt="Download QR Code"
                  className="w-48 h-48 rounded-xl"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground text-center">
                Scan to download
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
