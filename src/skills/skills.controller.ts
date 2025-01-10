import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill-dto';
import { Skill } from './skill.entity/skill.entity';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillService: SkillsService) {}

  
  @Post()
  create(@Body() createSkillDto: CreateSkillDto): Promise<Skill> {
    return this.skillService.create(createSkillDto);
  }

 
  @Get()
  findAll(): Promise<Skill[]> {
    return this.skillService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: number): Promise<Skill> {
    return this.skillService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateSkillDto: UpdateSkillDto,
  ): Promise<Skill> {
    return this.skillService.update(id, updateSkillDto);
  }


  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.skillService.delete(id);
  }
}
