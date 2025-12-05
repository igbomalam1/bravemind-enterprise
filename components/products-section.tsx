"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ShoppingCart, CheckCircle } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Monocrystalline Solar Panels",
    description: "High-efficiency panels for maximum power output",
    image: "/high-efficiency-monocrystalline-solar-panel-black-.jpg",
    price: 450,
    specs: "400W | 25-year warranty",
  },
  {
    id: 2,
    name: "Polycrystalline Solar Panels",
    description: "Cost-effective panels for budget-conscious installations",
    image: "/blue-polycrystalline-solar-panel-product-photograp.jpg",
    price: 380,
    specs: "350W | 20-year warranty",
  },
  {
    id: 3,
    name: "Solar Battery Storage (10kWh)",
    description: "Store excess energy for nighttime use",
    image: "/modern-wall-mounted-solar-battery-system-sleek-whi.jpg",
    price: 3500,
    specs: "10kWh capacity | Smart app control",
  },
  {
    id: 4,
    name: "Solar Battery Storage (20kWh)",
    description: "Commercial-grade storage for larger systems",
    image: "/large-commercial-solar-battery-storage-unit-indust.jpg",
    price: 6200,
    specs: "20kWh capacity | Commercial grade",
  },
  {
    id: 5,
    name: "Solar CCTV Camera System",
    description: "24/7 security powered by the sun",
    image: "/outdoor-solar-powered-cctv-camera-white-housing-sm.jpg",
    price: 280,
    specs: "1080p HD | Night vision | WiFi",
  },
  {
    id: 6,
    name: "Solar Inverter (5kW)",
    description: "Convert DC to AC power efficiently",
    image: "/modern-solar-inverter-mounted-on-wall-digital-disp.jpg",
    price: 1200,
    specs: "5kW hybrid | MPPT technology",
  },
  {
    id: 7,
    name: "Solar Water Heater",
    description: "Hot water all year round, naturally",
    image: "/rooftop-solar-water-heating-system-evacuated-tubes.jpg",
    price: 850,
    specs: "200L capacity | All-weather",
  },
  {
    id: 8,
    name: "Solar Street Light",
    description: "Illuminate streets without grid power",
    image: "/tall-solar-powered-led-street-light-integrated-pan.jpg",
    price: 420,
    specs: "100W LED | Auto on/off",
  },
  {
    id: 9,
    name: "Solar Charge Controller",
    description: "Protect your batteries with smart charging",
    image: "/mppt-solar-charge-controller-lcd-screen-multiple-c.jpg",
    price: 180,
    specs: "60A MPPT | LCD display",
  },
  {
    id: 10,
    name: "Complete Solar Kit (Home)",
    description: "Everything you need for home solar installation",
    image: "/placeholder.svg?height=300&width=400",
    price: 8500,
    specs: "5kW system | Full installation included",
  },
]

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[\d\s+()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm() || !selectedProduct) return

    const message = encodeURIComponent(
      `Hello Bravemind Enterprise, I would like to make an enquiry.\n\n` +
        `Product: ${selectedProduct.name}\n` +
        `Specs: ${selectedProduct.specs}\n\n` +
        `My Details:\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `Please share pricing, availability, and installation information.`,
    )

    window.open(`https://wa.me/2347033963154?text=${message}`, "_blank")

    setSelectedProduct(null)
    setFormData({ name: "", email: "", phone: "" })
  }

  return (
    <section id="products" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">Our Premium Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            High-quality solar equipment with industry-leading warranties and professional installation
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{product.specs}</span>
                  </div>
                  
                </div>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Make Enquiries
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Order Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-accent" />
              Make Enquiries
            </DialogTitle>
            <DialogDescription>
              {selectedProduct && <span className="text-accent font-medium">{selectedProduct.name}</span>}
              {" - "}Fill in your details to send your enquiry via WhatsApp.
            </DialogDescription>
          </DialogHeader>

          {selectedProduct && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Summary */}
              <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                <img
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="font-medium text-sm">{selectedProduct.name}</p>
                  
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-3">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Phone/WhatsApp Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 XXX XXX XXXX"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Send Enquiry via WhatsApp
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
