import { Instagram, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  console.log("test1231312")
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              PISYS
            </h3>
            <p className="text-sm text-muted-foreground">
              Your digital storage assistant that remembers everything, so you
              don't have to.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#features"
                  className="hover:text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("how-it-works");
                    if (el)
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="hover:text-primary transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="hover:text-primary transition-colors"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-primary transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="flex gap-4">
              <a
                href="mailto:hello@aimomstorage.com"
                className="w-10 h-10 rounded-lg bg-accent hover:bg-primary/10 flex items-center justify-center transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 rounded-lg bg-accent hover:bg-primary/10 flex items-center justify-center transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 rounded-lg bg-accent hover:bg-primary/10 flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              hello@aimomstorage.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} PISYS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
