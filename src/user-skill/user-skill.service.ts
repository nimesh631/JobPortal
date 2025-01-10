import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSkill } from './user-skill.entity/user-skill.entity';
import { CreateUserSkillDto } from './dto/create-user-skill.dto';
import { UpdateUserSkillDto } from './dto/update-user-skill.dto';
import { User } from 'src/users/user.entity/user.entity';
import { Skill } from 'src/skills/skill.entity/skill.entity';

@Injectable()
export class UserSkillService {
  constructor(
    @InjectRepository(UserSkill)
    private userSkillRepository: Repository<UserSkill>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Skill)
    private readonly skillRepository: Repository<Skill>,

  ) {}

  async create(createUserSkillDto: CreateUserSkillDto): Promise<UserSkill> {
    const users = await this.userRepository.findOne({
      where:{id: createUserSkillDto.user_id},
    })
    if(!users){
      throw new NotFoundException('user not found');
    }

    const skills = await this.skillRepository.findOne({
      where:{id: createUserSkillDto.skill_id},
    })
    if(!skills){
      throw new NotFoundException('skill not found')
    }

    const userSkill = this.userSkillRepository.create({...createUserSkillDto,user:users,skill:skills});
    return this.userSkillRepository.save(userSkill);
  }

  async findAll(): Promise<UserSkill[]> {
    return this.userSkillRepository.find({relations:['user','skill']});
  }

  async findOne(user_skill_id: number): Promise<UserSkill> {
    const result = this.userSkillRepository.findOne({
      where:{user_skill_id},
    })
    if(!result){
      throw new NotFoundException( `application ${user_skill_id} not found`)
    }
    return result
  }

  async update(user_skill_id: number, updateUserSkillDto: UpdateUserSkillDto): Promise<UserSkill> {
    const userAvailable = await this.userRepository.findOne({
      where:{id: updateUserSkillDto.user_id}
    })
    if(!userAvailable){
      throw new NotFoundException('user not found')
    }

    const skills = await this.skillRepository.findOne({
      where:{id: updateUserSkillDto.skill_id}
    })
    if(!skills){
      throw new NotFoundException('skill not found')
    }

    const userSkillAvailable = await this.userSkillRepository.findOne({
      where:{user_skill_id},
    })
    if(!userSkillAvailable){
      throw new NotFoundException('application not found')
    }

    const updatedUserSkill = this.userSkillRepository.create({...updateUserSkillDto,user:userAvailable,skill:skills});
    return this.userSkillRepository.save(updatedUserSkill)
  }

  async remove(user_skill_id: number): Promise<void> {
    const userSkillAvailable = await this.userSkillRepository.findOne({
      where: {user_skill_id},
    })
    if ((!userSkillAvailable)) {
      throw new NotFoundException('user skill not found');
    }
    await this.userSkillRepository.delete(user_skill_id);
  }
}
