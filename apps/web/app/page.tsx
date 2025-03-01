import Link from 'next/link';
import CreateProductPage from './product/new/page';

export const dynamic = "force-dynamic";

const page = () => {
  return (
    <>
      <Link href="/">Hi there</Link>
      <h1>Product Creation</h1>

      <CreateProductPage />
    </>
  );
};

export default page;
