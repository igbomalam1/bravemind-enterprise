"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Home, Building2, Tractor, Church } from "lucide-react"

const places = [
  {
    name: "Residential Homes",
    description: "Reduce your home's electricity bills with rooftop solar installations",
    image: "/residential-solar-powered-building.jpg",
    icon: Home,
  },
  {
    name: "Commercial Offices",
    description: "Power your business operations with sustainable solar energy",
    image: "/commercial-offices.jpg",
    icon: Building2,
  },
  {
    name: "Solar powered borewhole",
    description: "Affordable solar solutions for irrigation and borehole operations",
    image: "/water-powered-solar-projects.jpg",
    icon: Tractor,
  },
  {
    name: "Religious Buildings",
    description: "Sustainable energy for mosques, churches, and community centers",
    image: "/beautiful-mosque-with-solar-panels-integrated-on-r.jpg",
    icon: Church,
  },
  {
    name: "Community Centers",
    description: "Powering community facilities with clean renewable energy",
    image: "/community-centre.jpg",
    icon: Building2,
  },
]

export function InstallationPlaces() {
  return (
    <section id="installations" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">Where We Install</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From residential homes to commercial buildings, we provide tailored solar solutions for every need
          </p>
        </div>

        {/* Grid Layout: 2-2-1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {places.slice(0, 4).map((place, index) => (
            <Card
              key={place.name}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0 relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={place.image || "/placeholder.svg"}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement
                      img.src = "/placeholder.svg"
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <place.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{place.name}</h3>
                  </div>
                  <p className="text-white/80 text-sm">{place.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
          {/* Center the last card */}
          <div className="md:col-span-2 flex justify-center">
            {(() => {
              const lastPlace = places[4]
              const IconComponent = lastPlace.icon
              return (
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-1/2">
                  <CardContent className="p-0 relative">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={lastPlace.image || "/placeholder.svg"}
                        alt={lastPlace.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement
                          img.src = "/placeholder.svg"
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{lastPlace.name}</h3>
                      </div>
                      <p className="text-white/80 text-sm">{lastPlace.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}
