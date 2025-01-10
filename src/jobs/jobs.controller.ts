import { Controller, Get, Post, Put, Delete, Param, Body,Query } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JobType } from './dto/job-type-enum';
import { Status } from './dto/job-status-enum';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body() createJobDto: CreateJobDto) {
    return this.jobsService.create(createJobDto);
  }

  @Get()
  findAll(
    @Query('employment_type') employment_type?: JobType,
    @Query('status') status?: Status,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.jobsService.findAll({employment_type, status, page, limit});
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.jobsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateJobDto: UpdateJobDto) {
    return this.jobsService.update(id, updateJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.jobsService.remove(id);
  }
}
