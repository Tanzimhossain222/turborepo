import { Product } from '@repo/types';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const ProductsPage = async () => {
  const products = await fetch(`${process.env.API_URL}/products`, {
    next: {
      tags: ['products'],
    },
  });
  const productsData: Product[] = await products.json();


  if (!productsData.length) {
    return (
      <div>
        <h1>Product Page</h1>
        <p>No products available.</p>
        <p>
          <Link href="/product/new">Create a New Product</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Product Page</h1>
      <p>
        <Link href="/product/new">Create a New Product</Link>
      </p>

      <h2>Products</h2>
      <p>Here are all the products:</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>


          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <Link href={`/product/${product.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


     
    </div>
  );
};

export default ProductsPage;
