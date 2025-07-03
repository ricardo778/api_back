import { Controller, Get, Post, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }

  @Post()
  async create(@Body() data: any) {
    const userExists = await this.contactsService.findUserByEmail(data.email);
    if (!userExists) {
      throw new NotFoundException('El correo no está registrado como usuario');
    }
    return this.contactsService.create(data);
  }

  @Delete('user/:email')
  removeByEmail(@Param('email') email: string) {
    return this.contactsService.removeByEmail(email);
  }
}
