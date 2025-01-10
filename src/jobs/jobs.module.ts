import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { Job } from './job.entity/job.entity';
import { User } from 'src/users/user.entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Job,User])], // Import Job entity here
  controllers: [JobsController],
  providers: [JobsService],
  exports: [TypeOrmModule], // Export TypeOrmModule if needed in other modules
})
export class JobsModule {}
