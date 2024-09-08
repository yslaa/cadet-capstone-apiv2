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
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { responseHandler } from '../utils/utils.responseHandler';

@Controller('api/v1/Category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const data = await this.categoryService.create(createCategoryDto);
    return responseHandler(
      data,
      'Category created successfully',
      HttpStatus.CREATED,
    );
  }

  @Get()
  async findAll() {
    const data = await this.categoryService.findAll();
    return responseHandler(
      data,
      data?.length === 0
        ? 'No Categories found'
        : 'All Categories retrieved successfully',
      HttpStatus.OK,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.categoryService.findOne(+id);
    if (!data) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return responseHandler(
      data,
      'Category retrieved successfully',
      HttpStatus.OK,
    );
  }

  @Patch('edit/:id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const data = await this.categoryService.update(+id, updateCategoryDto);
    if (!data) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return responseHandler(
      data,
      'Category updated successfully',
      HttpStatus.OK,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.categoryService.remove(+id);
    if (!data) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return responseHandler(
      data,
      'Category deleted successfully',
      HttpStatus.OK,
    );
  }
}
