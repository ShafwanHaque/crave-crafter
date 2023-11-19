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

  findAll() {
    return `This action returns all vendor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vendor`;
  }

  update(id: number, updateVendorDto: UpdateVendorDto) {
    return `This action updates a #${id} vendor`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendor`;
  }
}
