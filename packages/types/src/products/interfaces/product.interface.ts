import { CreateProductDto } from '../dto/create-product';

export interface Product extends CreateProductDto {
  id: string;
}
