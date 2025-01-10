import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './applications.entity/applications.entity'
import { ApplicationController } from './applications.controller'
import { ApplicationService } from './applications.service'
import { User } from 'src/users/user.entity/user.entity';
import { Job } from 'src/jobs/job.entity/job.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Application,User,Job])],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
