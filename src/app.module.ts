import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './jobs/job.entity/job.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity/user.entity';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'nimesh',
      database: 'job_portal',
      entities: [Job,User],
      synchronize: true,
    }),
    UsersModule,
    JobsModule,
  ],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
    console.log('Database connection established!');
  }
}
