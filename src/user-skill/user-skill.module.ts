import { Module } from '@nestjs/common';
import { UserSkillController } from './user-skill.controller';
import { UserSkillService } from './user-skill.service';
import { UserSkill } from './user-skill.entity/user-skill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserSkill])],
  controllers: [UserSkillController],
  providers: [UserSkillService]
})
export class UserSkillModule {}
