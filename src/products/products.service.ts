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

  findAll() :Promise<Product[]>{
    return this.productRepository.find();
  }

  async findOne(id: number) {
    return await this.productRepository.findOne({where:{id:id}})
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productRepository.update(id,updateProductDto);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
