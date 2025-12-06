import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNaira(value: number) {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(
    value,
  )
}

export function discountPercent(original: number, discounted: number) {
  if (!original || original <= 0 || discounted >= original) return 0
  return Math.round(((original - discounted) / original) * 100)
}
