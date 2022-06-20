import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/create')
  createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.usersService.createUser(createUserDto);
  }

  @Get('/:phone')
  getUserByPhone(@Param('phone') phone: number): Promise<any> {
    return this.usersService.getUserByPhone(phone);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string): Promise<any> {
    return this.usersService.removeUser(id);
  }
}
