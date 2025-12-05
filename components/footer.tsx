import { Sun, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "Installation Services", href: "#installations" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#about" },
]

const productLinks = [
  { name: "Solar Panels", href: "#products" },
  { name: "Solar Batteries", href: "#products" },
  { name: "CCTV Systems", href: "#products" },
  { name: "Inverters", href: "#products" },
  { name: "Complete Kits", href: "#products" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Sun className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="font-bold text-lg">Bravemind Enterprise</span>
            </a>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Powering Tomorrow, Today. Your trusted partner for clean, sustainable solar energy solutions across
              Nigeria.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-sm text-primary-foreground/70">
              <p>
                Head Office:
                <br />
                12 Agidi Enyi Ani Way Ogbe-Ozoma, Okpanam, Delta State, Nigeria.
              </p>
              <p>
                Branch Office:
                <br />
                6PJ-3U + H32, Nnebisi Road, Umuonaje 320242, Asaba, Delta State, Nigeria.
              </p>
              <p className="space-y-1">
                <a href="tel:+2347039363154" className="hover:text-accent transition-colors">07039363154</a>
                <br />
                <a href="tel:+2348069452608" className="hover:text-accent transition-colors">08069452608</a>
                <br />
                <a href="tel:+2348054180077" className="hover:text-accent transition-colors">08054180077</a>
                <br />
                <a href="tel:+2347065954551" className="hover:text-accent transition-colors">07065954551</a>
              </p>
              <p>
                <a
                  href="https://wa.me/2347033963154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">© 2025 Bravemind Enterprise. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
