import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/prisma.service';
import { CategoryController } from 'src/category/category.controller';
import { CategoryService } from 'src/category/category.service';

@Module({
  controllers: [ProductController, CategoryController],
  providers: [ProductService, PrismaService, CategoryService],
})
export class ProductModule {}
