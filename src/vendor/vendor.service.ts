import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vendor } from './entities/vendor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VendorService {
  //inject vendor repository
  constructor(@InjectRepository(Vendor) private readonly vendorRepository : Repository<Vendor>){

  }
  async create(createVendorDto: CreateVendorDto) :Promise<Vendor> {
    // let vendor : Vendor = new Vendor();
    // vendor.companyName = createVendorDto.companyName;
    // vendor.contactNumber = createVendorDto.contactNumber;
    // vendor.email = createVendorDto.email;
    // vendor.address = createVendorDto.address;
    // vendor.status = createVendorDto.status;

    // return this.vendorRepository.save(vendor);

      const vendor = await this.vendorRepository.create(createVendorDto);
          return await this.vendorRepository.save(vendor);
  }

  findAll() :Promise<Vendor[]>{
    return this.vendorRepository.find();
  }

  async findOne(id: number) {
    return await this.vendorRepository.findOne({where:{id:id}})
  }

  async update(id: number, updateVendorDto: UpdateVendorDto) {
    return await this.vendorRepository.update(id,updateVendorDto);
  }

  remove(id: number) {
    return this.vendorRepository.delete(id);
  }
}
