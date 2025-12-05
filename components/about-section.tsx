import { MapPin, Phone, Mail, Clock, Shield, Award, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-secondary w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          {/* Content */}
          <div className="w-full">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6 leading-tight">
              Powering Nigeria&apos;s <span className="text-accent">Sustainable Future</span>
            </h2>

            <div className="prose prose-lg text-muted-foreground mb-8 max-w-none">
              <p className="text-pretty">
                <strong className="text-foreground">Bravemind Enterprise</strong> is a leading solar equipment supplier
                and installation company dedicated to bringing clean, renewable energy to homes, businesses, and
                communities across Nigeria.
              </p>
              <p className="text-pretty">
                With over 10 years of experience and 500+ successful installations, we provide premium solar panels,
                batteries, CCTV systems, and complete energy solutions. Our certified technicians ensure professional
                installation and ongoing support for all our clients.
              </p>
              <p className="text-pretty">
                We believe in a sustainable future powered by the sun. Let us help you reduce energy costs while
                contributing to a greener planet.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Shield, label: "Certified Installers" },
                { icon: Award, label: "25-Year Warranty" },
                { icon: Users, label: "24/7 Support" },
              ].map((feature) => (
                <div key={feature.label} className="text-center p-4 bg-background rounded-xl flex flex-col items-center">
                  <div className="w-12 h-12 mb-2 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{feature.label}</p>
                </div>
              ))}
            </div>

            {/* Contact Details */}
            <div className="space-y-4 p-4 sm:p-6 bg-background rounded-xl border border-border w-full">
              <h3 className="font-bold text-foreground">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <span>
                    Head Office: 12 Agidi Enyi Ani Way Ogbe-Ozoma, Okpanam, Delta State, Nigeria.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <span>
                    Branch Office: 6PJ-3U + H32, Nnebisi Road, Umuonaje 320242, Asaba, Delta State, Nigeria.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground flex-wrap">
                  <Phone className="w-5 h-5 text-accent mt-1" />
                  <div className="flex flex-wrap gap-2">
                    <a href="tel:+2347039363154" className="hover:text-accent">07039363154</a>
                    <a href="tel:+2348069452608" className="hover:text-accent">08069452608</a>
                    <a href="tel:+2348054180077" className="hover:text-accent">08054180077</a>
                    <a href="tel:+2347065954551" className="hover:text-accent">07065954551</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>Mon - Sat, 8AM - 6PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full flex justify-center items-center mb-8 lg:mb-0">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <img
                src="/professional-team-of-solar-panel-installers-workin.jpg"
                alt="Bravemind Enterprise team installing solar panels"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl shadow-xl min-w-[120px]">
              <div className="text-2xl sm:text-4xl font-bold">110+</div>
              <div className="text-xs sm:text-sm opacity-80">Successful Installations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
