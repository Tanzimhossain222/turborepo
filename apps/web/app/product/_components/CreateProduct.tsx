import { createNewProduct } from '../action';

const CreateProduct = () => {
  return (
    <div>
      <form action={createNewProduct}>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label htmlFor="price">Product Price:</label>
          <input type="text" id="price" name="price" required />
        </div>

        <div>
          <label htmlFor="stock">Stock:</label>
          <input type="number" id="stock" name="stock" required />
        </div>

        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" required />
        </div>

        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
