import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }
  
  @Post()
  async create(@Body() data: any) {
    const nuevo = await this.productsService.create(data);
    return {
      message: 'Celular creado exitosamente',
      data: nuevo
    };
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.productsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
