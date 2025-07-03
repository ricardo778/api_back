import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) { }

  findAll() {
    return this.prisma.phones.findMany({
      include: {
        user: true,
        provider: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.phones.findUnique({
      where: { id },
      include: {
        user: true,
        provider: true,
      },
    });
  }
  create(data: any) {
    return this.prisma.phones.create({
      data: {
        brand: data.brand,
        model: data.model,
        description: data.description,
        price: Number(data.price),
        stock: Number(data.stock),
        published: data.published === true || data.published === 'true',
        userId: Number(data.userId),
        providerId: Number(data.providerId),
      },
    });
  }


  update(id: number, data: any) {
    return this.prisma.phones.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.phones.delete({ where: { id } });
  }
}
