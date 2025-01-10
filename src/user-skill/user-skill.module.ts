import { Module } from '@nestjs/common';
import { UserSkillController } from './user-skill.controller';
import { UserSkillService } from './user-skill.service';
import { UserSkill } from './user-skill.entity/user-skill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity/user.entity';
import { Skill } from 'src/skills/skill.entity/skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserSkill,User,Skill])],
  controllers: [UserSkillController],
  providers: [UserSkillService]
})
export class UserSkillModule {}
