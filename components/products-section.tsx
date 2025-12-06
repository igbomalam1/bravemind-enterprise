"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"
import { formatNaira, discountPercent } from "@/lib/utils"
import { Spinner } from "@/components/ui/spinner"


export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null)
  const [galleryProduct, setGalleryProduct] = useState<(typeof products)[0] | null>(null)
  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const [imageLoading, setImageLoading] = useState(false)
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
          {(() => {
            const byPriceAsc = (a: (typeof products)[0], b: (typeof products)[0]) => a.discountedPrice - b.discountedPrice
            const under500 = products.filter((p) => p.discountedPrice < 500000 && p.id !== 5).sort(byPriceAsc).slice(0, 2)
            const mid800To2m = products.filter((p) => p.discountedPrice >= 800000 && p.discountedPrice <= 2000000).sort(byPriceAsc).slice(0, 2)
            const high4To17m = products.filter((p) => p.discountedPrice >= 4000000 && p.discountedPrice <= 17000000).sort(byPriceAsc).slice(0, 1)
            const cctv = products.find((p) => p.id === 5)
            const selection = [...under500, ...mid800To2m, ...high4To17m, ...(cctv ? [cctv] : [])]
            const unique = Array.from(new Map(selection.map((p) => [p.id, p])).values())
            let six = unique.slice(0, 6)
            const preferred = six.find((p) => p.images.length === 3) || products.find((p) => p.images.length === 3)
            if (preferred) {
              const rest = six.filter((p) => p.id !== preferred.id)
              six = [preferred, ...rest].slice(0, 6)
            }
            return six
          })().map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  type="button"
                  aria-label={`Open image gallery for ${product.name}`}
                  onClick={() => {
                    setGalleryProduct(product)
                    setActiveImageIdx(0)
                  }}
                  className="aspect-[4/3] overflow-hidden bg-muted w-full"
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={800}
                    height={600}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/placeholder.jpg"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </button>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-2 break-words">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2 break-words">{product.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{product.specs}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground line-through">
                      {formatNaira(product.originalPrice)}
                    </span>
                    <span className="text-foreground font-bold text-xl">
                      {formatNaira(product.discountedPrice)}
                    </span>
                    <span className="text-accent font-semibold">
                      {(product.discountPercentListed ?? discountPercent(product.originalPrice, product.discountedPrice))}% OFF
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Make Enquiries
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/products" aria-label="View more products">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">View More Products</Button>
          </Link>
        </div>
      </div>

      {/* Order Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
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
                <Image
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  className="w-16 h-16 object-cover rounded-md"
                  width={64}
                  height={64}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/placeholder.jpg"
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

      {/* Gallery Modal */}
      <Dialog open={!!galleryProduct} onOpenChange={() => setGalleryProduct(null)}>
        <DialogContent className="sm:max-w-3xl" aria-label="Product image gallery">
          <DialogHeader>
            <DialogTitle>Image Gallery</DialogTitle>
            <DialogDescription>
              {galleryProduct && galleryProduct.name}
            </DialogDescription>
          </DialogHeader>
          {galleryProduct && (
            <div className="space-y-4">
              <div className="relative min-w-[600px] mx-auto">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <Spinner className="text-foreground" />
                  </div>
                )}
                <Image
                  src={(galleryProduct.images[activeImageIdx] || galleryProduct.image) ?? "/placeholder.svg"}
                  alt={`${galleryProduct.name} preview ${activeImageIdx + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-md"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/placeholder.jpg"
                  onLoadingComplete={() => setImageLoading(false)}
                  onLoad={() => setImageLoading(true)}
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
              <div className="flex items-center justify-center gap-3">
                {galleryProduct.images.map((src, idx) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`View thumbnail ${idx + 1} for ${galleryProduct.name}`}
                    onClick={() => {
                      setActiveImageIdx(idx)
                      setImageLoading(true)
                    }}
                    className={"border rounded-md overflow-hidden"}
                  >
                    <Image
                      src={src}
                      alt={`${galleryProduct.name} thumbnail ${idx + 1}`}
                      width={150}
                      height={150}
                      className="object-cover"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="/placeholder.jpg"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
