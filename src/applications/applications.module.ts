import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './applications.entity/applications.entity'
import { ApplicationController } from './applications.controller'
import { ApplicationService } from './applications.service'

@Module({
  imports: [TypeOrmModule.forFeature([Application])],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
