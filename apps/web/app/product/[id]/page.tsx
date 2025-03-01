import { Product } from '@repo/types';
import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
}

const ProductDetails = async ({ params }: PageProps) => {
  const product = await fetch(`${process.env.API_URL}/products/${params.id}`);
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
