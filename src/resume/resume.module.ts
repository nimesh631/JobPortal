import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resume } from './resume.entity/resume.entity';
import { User } from 'src/users/user.entity/user.entity';
@Module({
  imports : [TypeOrmModule.forFeature([Resume,User])],
  controllers: [ResumeController],
  providers: [ResumeService]
})
export class ResumeModule {}
