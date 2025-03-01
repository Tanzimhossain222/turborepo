import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProductDto } from '@repo/types';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDto) { 
    return this.productsService.createProduct(productData);
  }
  @Get()
  async getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    return this.productsService.getProduct(id);
  }


}
