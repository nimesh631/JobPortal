import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity/job.entity';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobsRepository: Repository<Job>,
  ) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const job = this.jobsRepository.create(createJobDto);
    return this.jobsRepository.save(job);
  }

  async findAll(): Promise<Job[]> {
    return this.jobsRepository.find();
  }

  async findOne(id: number): Promise<Job> {
    return this.jobsRepository.findOne({ where: { job_id: id } });
  }

  async update(id: number, updateJobDto: UpdateJobDto): Promise<Job> {
    await this.jobsRepository.update(id, updateJobDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.jobsRepository.delete(id);
  }
}
