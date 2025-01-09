import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resume } from './resume.entity/resume.entity';
@Module({
  imports : [TypeOrmModule.forFeature([Resume])],
  controllers: [ResumeController],
  providers: [ResumeService]
})
export class ResumeModule {}
