import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Resume } from './resume.entity/resume.entity';

@Controller('resumes')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}


  @Post()
  create(@Body() createResumeDto: CreateResumeDto): Promise<Resume> {
    return this.resumeService.create(createResumeDto);
  }

  @Get()
  findAll(): Promise<Resume[]> {
    return this.resumeService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: number): Promise<Resume> {
    return this.resumeService.findOne(id);
  }


  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateResumeDto: UpdateResumeDto,
  ): Promise<Resume> {
    return this.resumeService.update(+id, updateResumeDto);
  }


  @Delete(':id')
  remove(@Param('id') id: number){
    return this.resumeService.delete(id);
  }
}
