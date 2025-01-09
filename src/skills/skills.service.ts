import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skill } from './skill.entity/skill.entity';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill-dto';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill)
    private readonly skillRepository: Repository<Skill>,
  ) {}


  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    const skill = this.skillRepository.create(createSkillDto);
    return this.skillRepository.save(skill);
  }


  async findAll(): Promise<Skill[]> {
    return this.skillRepository.find();
  }

  async findOne(id: number): Promise<Skill> {
    return this.skillRepository.findOne({ where: { id: id } });
  }


  async update(id: number, updateSkillDto: UpdateSkillDto): Promise<Skill> {
    await this.skillRepository.update(id, updateSkillDto);
    return this.findOne(id);
  }


  async remove(id: number): Promise<void> {
    await this.skillRepository.delete(id);
  }
}
