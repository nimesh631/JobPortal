import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { JobSkillService } from './job-skill.service';
import { CreateJobSkillDto } from './dto/create-job-skill.dto';
import { UpdateJobSkillDto } from './dto/update-job-skill.dto';
import { JobSkill } from './jobskill.entity/jobskill.entity';

@Controller('job_skill')
export class JobSkillController {
  constructor(private readonly jobSkillService: JobSkillService) {}

 
  @Post()
  create(@Body() createJobSkillDto: CreateJobSkillDto): Promise<JobSkill> {
    return this.jobSkillService.create(createJobSkillDto);
  }


  @Get()
  findAll(): Promise<JobSkill[]> {
    return this.jobSkillService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: number): Promise<JobSkill> {
    return this.jobSkillService.findOne(id);
  }


  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateJobSkillDto: UpdateJobSkillDto,
  ): Promise<JobSkill> {
    return this.jobSkillService.update(id, updateJobSkillDto);
  }

  
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.jobSkillService.remove(id);
  }
}
