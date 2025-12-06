"use client"

import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatNaira, discountPercent } from '@/lib/utils'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export default function ProductsPage() {
  const [brokenImages, setBrokenImages] = useState<Record<number, boolean>>({})
  const [loadingImages, setLoadingImages] = useState<Record<number, boolean>>({})
  const [detailsProduct, setDetailsProduct] = useState<(typeof products)[0] | null>(null)
  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const [detailsLoading, setDetailsLoading] = useState(false)
  const [reachOutOpen, setReachOutOpen] = useState(false)
  const handleEnquiry = (p: (typeof products)[0]) => {
    const message = encodeURIComponent(
      `Hello Bravemind Enterprise, I would like to make an enquiry.\n\n` +
        `Product: ${p.name}\n` +
        `Specs: ${p.specs}\n\n` +
        `Please share pricing, availability, and installation information.`,
    )
    window.open(`https://wa.me/2347033963154?text=${message}`, '_blank')
  }
  const handleContact = () => {
    const message = encodeURIComponent(
      `Hello Bravemind Enterprise, I have a specific request and would like assistance finding the right product.`,
    )
    window.open(`https://wa.me/2347033963154?text=${message}`, '_blank')
  }
  useEffect(() => {
    const t = setTimeout(() => setReachOutOpen(true), 600)
    return () => clearTimeout(t)
  }, [])
  return (
    <main className="min-h-screen py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">All Products</h1>
            <p className="text-muted-foreground">Explore our full catalog</p>
          </div>
          <Link href="/" aria-label="Back to home">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 h-full"
            >
              <CardContent className="p-0 flex flex-col">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-muted">
                  {loadingImages[product.id] && (
                    <Skeleton className="absolute inset-0" aria-label="Loading image" />
                  )}
                  <Image
                    src={brokenImages[product.id] ? '/placeholder.jpg' : product.image || '/placeholder.svg'}
                    alt={product.name || 'Product image'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={800}
                    height={600}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/placeholder.jpg"
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    onError={() => setBrokenImages((s) => ({ ...s, [product.id]: true }))}
                    onLoadingComplete={() => setLoadingImages((s) => ({ ...s, [product.id]: false }))}
                    onLoad={() => setLoadingImages((s) => ({ ...s, [product.id]: true }))}
                  />
                </div>
                <div className="p-3 md:p-4 flex flex-col gap-2">
                  <h3 className="text-sm md:text-base font-medium text-foreground line-clamp-2 break-words">{product.name}</h3>
                  <div className="flex flex-col sm:flex-row gap-2 w-full justify-center items-center">
                    <Button
                      onClick={() => {
                        setDetailsProduct(product)
                        setActiveImageIdx(0)
                      }}
                      aria-label={`View details for ${product.name}`}
                      variant="outline"
                      className="h-9 min-h-9 px-2 md:h-10 md:px-3 text-xs md:text-sm text-nowrap leading-none w-full sm:w-auto"
                    >
                      View Details
                    </Button>
                    <Button
                      onClick={() => handleEnquiry(product)}
                      aria-label={`Make enquiries for ${product.name}`}
                      className="h-9 min-h-9 px-2 md:h-10 md:px-3 text-xs md:text-sm text-nowrap leading-none bg-primary hover:bg-primary/90 text-primary-foreground focus-visible:ring-2 w-full sm:w-auto"
                    >
                      Make Enquiries
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-5 pt-0 hidden" />
            </Card>
          ))}
        </div>
      </div>
      <Dialog open={reachOutOpen} onOpenChange={setReachOutOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Need Help?</DialogTitle>
            <DialogDescription>
              If you can't find what you need or you have a specific product, kindly reach out.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={handleContact} className="bg-primary text-primary-foreground">Contact Us</Button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={!!detailsProduct} onOpenChange={() => setDetailsProduct(null)}>
        <DialogContent className="sm:max-w-md md:max-w-xl lg:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Product Details</DialogTitle>
            <DialogDescription>{detailsProduct?.name}</DialogDescription>
          </DialogHeader>
          {detailsProduct && (
            <div className="space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="relative w-full max-w-[90vw] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] mx-auto">
                {detailsLoading && (
                  <Skeleton className="absolute inset-0" aria-label="Loading preview" />
                )}
                <Image
                  src={(detailsProduct.images[activeImageIdx] || detailsProduct.image) ?? '/placeholder.svg'}
                  alt={`${detailsProduct.name} preview ${activeImageIdx + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-md object-contain"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/placeholder.jpg"
                  onLoadingComplete={() => setDetailsLoading(false)}
                  onLoad={() => setDetailsLoading(true)}
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none">
                  <Button
                    type="button"
                    aria-label="Previous image"
                    variant="outline"
                    className="pointer-events-auto h-8 px-2 text-xs"
                    onClick={() => setActiveImageIdx((idx) => (idx - 1 + detailsProduct.images.length) % detailsProduct.images.length)}
                  >
                    Prev
                  </Button>
                  <Button
                    type="button"
                    aria-label="Next image"
                    variant="outline"
                    className="pointer-events-auto h-8 px-2 text-xs"
                    onClick={() => setActiveImageIdx((idx) => (idx + 1) % detailsProduct.images.length)}
                  >
                    Next
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                {detailsProduct.images.map((src, idx) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`View thumbnail ${idx + 1} for ${detailsProduct.name}`}
                    onClick={() => {
                      setActiveImageIdx(idx)
                      setDetailsLoading(true)
                    }}
                    className="border rounded-md overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`${detailsProduct.name} thumbnail ${idx + 1}`}
                      width={96}
                      height={96}
                      className="object-cover"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="/placeholder.jpg"
                    />
                  </button>
                ))}
              </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">{detailsProduct.description}</p>
                  <div className="text-sm"><span className="font-medium">Specs:</span> {detailsProduct.specs}</div>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground line-through">
                      {formatNaira(detailsProduct.originalPrice)}
                    </span>
                    <span className="text-foreground font-semibold text-lg">
                      {formatNaira(detailsProduct.discountedPrice)}
                    </span>
                    <span className="text-accent font-medium">
                      {(detailsProduct.discountPercentListed ?? discountPercent(detailsProduct.originalPrice, detailsProduct.discountedPrice))}% OFF
                    </span>
                  </div>
                  <div>
                    <Button
                      onClick={() => handleEnquiry(detailsProduct)}
                      aria-label={`Make enquiries for ${detailsProduct.name}`}
                    className="h-10 min-h-10 px-3 text-sm bg-primary hover:bg-primary/90 text-primary-foreground focus-visible:ring-2"
                  >
                    Make Enquiries
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}
