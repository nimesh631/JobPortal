import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserSkillService } from './user-skill.service';
import { CreateUserSkillDto } from './dto/create-user-skill.dto';
import { UpdateUserSkillDto } from './dto/update-user-skill.dto';
import { UserSkill } from './user-skill.entity/user-skill.entity';

@Controller('user-skill')
export class UserSkillController {
  constructor(private readonly userSkillService: UserSkillService) {}

  @Post()
  async create(@Body() createUserSkillDto: CreateUserSkillDto): Promise<UserSkill> {
    return this.userSkillService.create(createUserSkillDto);
  }

  @Get()
  async findAll(): Promise<UserSkill[]> {
    return this.userSkillService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserSkill> {
    return this.userSkillService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserSkillDto: UpdateUserSkillDto,
  ): Promise<UserSkill> {
    return this.userSkillService.update(id, updateUserSkillDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.userSkillService.remove(id);
  }
}
