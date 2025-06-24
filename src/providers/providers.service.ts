import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProvidersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.providers.findMany({ include: { phones: true } });
  }

  findOne(id: number) {
    return this.prisma.providers.findUnique({ where: { id }, include: { phones: true } });
  }

  create(data: any) {
    return this.prisma.providers.create({ data });
  }

  update(id: number, data: any) {
    return this.prisma.providers.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.providers.delete({ where: { id } });
  }
}
