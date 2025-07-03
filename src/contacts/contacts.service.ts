import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) { }

  findAll() {
    return this.prisma.contacts.findMany();
  }

  create(data: any) {
    return this.prisma.contacts.create({ data });
  }
  removeByEmail(email: string) {
    return this.prisma.contacts.deleteMany({
      where: { email },
    });
  }

  findUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
