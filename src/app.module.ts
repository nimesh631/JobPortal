import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './jobs/job.entity/job.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity/user.entity';
import { JobsModule } from './jobs/jobs.module';
import { UserSkillModule } from './user-skill/user-skill.module';
import { UserSkill } from './user-skill/user-skill.entity/user-skill.entity';
import { ResumeModule } from './resume/resume.module';
import { Resume } from './resume/resume.entity/resume.entity';
import { SkillsModule } from './skills/skills.module';
import { Skill } from './skills/skill.entity/skill.entity';
import { JobSkillModule } from './job-skill/job-skill.module';
import { JobSkill } from './job-skill/jobskill.entity/jobskill.entity';
import { ApplicationModule } from './applications/applications.module';
import { Application } from './applications/applications.entity/applications.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'nimesh',
      database: 'job_portal',
      entities: [Job,User,UserSkill,Resume,Skill,JobSkill,Application],
      synchronize: true,
    }),
    UsersModule,
    JobsModule,
    UserSkillModule,
    ResumeModule,
    SkillsModule,
    JobSkillModule,
    ApplicationModule,
  ],
})
export class AppModule{}

