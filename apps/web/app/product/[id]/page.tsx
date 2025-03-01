import { Product } from '@repo/types';
import Link from 'next/link';

// Define the params type explicitly
interface Params {
  id: string;
}

// Update PageProps to match Next.js expectations
interface PageProps {
  params: Promise<Params>; // params is always a Promise
}

export const dynamic = 'force-dynamic';

const ProductDetails = async ({ params }: PageProps) => {
  // Await the params Promise to get the actual params object
  const resolvedParams = await params;
  const product = await fetch(`${process.env.API_URL}/products/${resolvedParams.id}`);
  const productData: Product = await product.json();

  if (!product.ok) {
    return (
      <div>
        <h1>Error fetching product</h1>
      </div>
    );
  }

  return (
    <div>
      <Link href="/product">Back to Products</Link>
      <br />

      <h1>Product Details</h1>

      <h2>{productData.name}</h2>
      <p>
        <strong>Price:</strong> {productData.price}
      </p>
      <p>
        <strong>Category:</strong> {productData.category}
      </p>
    </div>
  );
};

export default ProductDetails;