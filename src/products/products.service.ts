import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  //inject product repository
  constructor(@InjectRepository(Product) private readonly productRepository : Repository<Product>){

  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    // let product : Product = new Product();
    // product.productName = createProductDto.productName;
    // product.foodID = createProductDto.foodID;
    // product.groceryID = createProductDto.groceryID;
    // product.status = createProductDto.status;
    // product.unitPrice = createProductDto.unitPrice;
    // product.unitQuantity = createProductDto.unitQuantity;

    // return this.productRepository.save(product);

      const product = await this.productRepository.create(createProductDto);
          return await this.productRepository.save(product);
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
