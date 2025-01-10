import { Module } from '@nestjs/common';
import { JobSkillController } from './job-skill.controller';
import { JobSkillService } from './job-skill.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobSkill } from './jobskill.entity/jobskill.entity';
import { Job } from 'src/jobs/job.entity/job.entity';
import { Skill } from 'src/skills/skill.entity/skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobSkill,Job,Skill])],
  controllers: [JobSkillController],
  providers: [JobSkillService]
})
export class JobSkillModule {}
