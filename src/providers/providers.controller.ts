import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { CreateProviderDto, LoginDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ObjectId } from 'mongodb';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Post('/signup')
  async create(@Body() createProviderDto: CreateProviderDto) {
    return this.providersService.signUp(createProviderDto);
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    return this.providersService.login(loginDto);
  }

  @Get()
  listAllProviders() {
    return this.providersService.listProviders();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.providersService.findOne(new ObjectId(id));
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() updateProviderDto: UpdateProviderDto) {
    return this.providersService.update(new ObjectId(id), updateProviderDto);
  }
}
