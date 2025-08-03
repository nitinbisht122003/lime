export function calculateDiscountPercent(mrp: number, selling_price: number): number {
  return Number((((mrp - selling_price) / mrp) * 100).toFixed(2));
}
