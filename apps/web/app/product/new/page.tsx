import Link from 'next/link';
import CreateProduct from '../_components/CreateProduct';

const CreateProductPage = () => {
  return (
    <div>
      <Link href="/">Back to Home</Link>
      <h1>Create a New Product</h1>

      <CreateProduct />
    </div>
  );
};

export default CreateProductPage;
