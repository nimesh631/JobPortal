import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSkill } from './user-skill.entity/user-skill.entity';
import { CreateUserSkillDto } from './dto/create-user-skill.dto';
import { UpdateUserSkillDto } from './dto/update-user-skill.dto';

@Injectable()
export class UserSkillService {
  constructor(
    @InjectRepository(UserSkill)
    private userSkillRepository: Repository<UserSkill>,
  ) {}

  async create(createUserSkillDto: CreateUserSkillDto): Promise<UserSkill> {
    const userSkill = this.userSkillRepository.create(createUserSkillDto);
    return this.userSkillRepository.save(userSkill);
  }

  async findAll(): Promise<UserSkill[]> {
    return this.userSkillRepository.find();
  }

  async findOne(id: number): Promise<UserSkill> {
    return this.userSkillRepository.findOne({ where: { user_skill_id: id } });
  }

  async update(id: number, updateUserSkillDto: UpdateUserSkillDto): Promise<UserSkill> {
    await this.userSkillRepository.update(id, updateUserSkillDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userSkillRepository.delete(id);
  }
}
