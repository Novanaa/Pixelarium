export default function rupiah(amount: number): string {
  const convertedIDRPrice: string = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);

  return convertedIDRPrice;
}
