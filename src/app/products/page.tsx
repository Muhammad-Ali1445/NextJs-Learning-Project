import Link from "next/link";

export default function productPage() {
  const productId=100
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>This is a product page </h1>
      <Link href="products/1"><h3>product details 1</h3></Link>
      <Link href="products/2"><h3>product details 2</h3></Link>
      <Link href={`products/${productId}`} replace><h3>product details {productId}</h3></Link>
    </div>
  );
}