import { Module } from '@nestjs/common';
import { JobSkillController } from './job-skill.controller';
import { JobSkillService } from './job-skill.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobSkill } from './jobskill.entity/jobskill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobSkill])],
  controllers: [JobSkillController],
  providers: [JobSkillService]
})
export class JobSkillModule {}
