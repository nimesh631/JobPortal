import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './applications.entity/applications.entity';
import { CreateApplicationDto } from './dto/create-applications.dto';
import { UpdateApplicationDto } from './dto/update-applications.dto';
import { Job } from 'src/jobs/job.entity/job.entity';
import { User } from 'src/users/user.entity/user.entity';
@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Job) private readonly jobsRepository: Repository<Job>,
  ) {}

  async create(createApplicationDto: CreateApplicationDto): Promise<Application> {
    const user = await this.userRepository.findOne({
      where: { id:createApplicationDto.userId},
    });
    if (!user)
      throw new NotFoundException(
        `User with the id ${createApplicationDto.userId} was not found`,
      );

      const job = await this.jobsRepository.findOne({
        where: { id:createApplicationDto.jobId},
      });
      if (!job)
        throw new NotFoundException(
          `job with the id ${createApplicationDto.jobId} was not found`,
        );
    const application = this.applicationRepository.create({...createApplicationDto,user,job});
    return this.applicationRepository.save(application);
  }

  async findAll(): Promise<Application[]> {
    return this.applicationRepository.find({ relations: ['user', 'job'] });
  }

  async findOne(id: number): Promise<Application> {
    const application = await this.applicationRepository.findOne({
      where: { id },
      relations: ['user', 'job'],
    });
    if (!application) {
      throw new NotFoundException(`Application with id ${id} not found`);
    }
    return application;
  }

  async update(id: number, updateApplicationDto: UpdateApplicationDto): Promise<Application> {
    await this.findOne(id);
    await this.applicationRepository.update(id, updateApplicationDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const application = await this.findOne(id);
    await this.applicationRepository.delete(id);
  }
}