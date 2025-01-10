import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApplicationService } from './applications.service';
import { CreateApplicationDto } from './dto/create-applications.dto';
import { UpdateApplicationDto } from './dto/update-applications.dto'
import { Application } from './applications.entity/applications.entity'

@Controller('applications')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post()
  create(@Body() createApplicationDto: CreateApplicationDto): Promise<Application> {
    return this.applicationService.create(createApplicationDto);
  }

  @Get()
  findAll(): Promise<Application[]> {
    return this.applicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Application> {
    return this.applicationService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateApplicationDto: UpdateApplicationDto,
  ): Promise<Application> {
    return this.applicationService.update(id, updateApplicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.applicationService.remove(id);
  }
}
