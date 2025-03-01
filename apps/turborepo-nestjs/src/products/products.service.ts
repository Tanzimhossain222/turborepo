import { Injectable } from '@nestjs/common';
import { CreateProductDto, Product } from '@repo/types';
@Injectable()
export class ProductsService {
  private products: Product[] = [];

  createProduct(productData: CreateProductDto) {
    const id = Math.random().toString(36).substring(7);

    const newProduct = { ...productData, id };
    this.products.push(newProduct);

    return newProduct;
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find((product) => product.id === id) || null;
  }

  deleteProduct(id: string) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
