import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { responseHandler } from '../utils/utils.responseHandler';

@Controller('api/v1/Product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const data = await this.productService.create(createProductDto);
    return responseHandler(
      data,
      'Product created successfully',
      HttpStatus.CREATED,
    );
  }

  @Get()
  async findAll() {
    const data = await this.productService.findAll();
    return responseHandler(
      data,
      data?.length === 0
        ? 'No Product found'
        : 'All Product retrieved successfully',
      HttpStatus.OK,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.productService.findOne(+id);
    if (!data) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return responseHandler(
      data,
      'Product retrieved successfully',
      HttpStatus.OK,
    );
  }

  @Patch('edit/:id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const data = await this.productService.update(+id, updateProductDto);

    if (!data) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return responseHandler(data, 'Product updated successfully', HttpStatus.OK);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.productService.remove(+id);
    if (!data) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return responseHandler(data, 'Product deleted successfully', HttpStatus.OK);
  }
}
