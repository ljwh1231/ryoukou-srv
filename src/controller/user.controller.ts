import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreateRequest } from 'src/types/user.type';

@Controller('user')
export class UserController {
  @Get()
  getUser(): string {
    return 'get user';
  }

  @Post()
  createUser(@Body() userCreateDto: UserCreateRequest): string {
    console.log(userCreateDto);
    return 'create user';
  }
}
