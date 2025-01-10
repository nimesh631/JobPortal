import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity/job.entity';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { User } from 'src/users/user.entity/user.entity';
import { JobType } from './dto/job-type-enum';
import { Status } from './dto/job-status-enum';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobsRepository: Repository<Job>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const user = await this.userRepository.findOne({
      where: {id: createJobDto.userId},
    });

    const job = this.jobsRepository.create({...createJobDto,user});
    return this.jobsRepository.save(job);
  }

  async findAll(query: {
    employment_type?: JobType;
    limit?: number;
    page?: number;
    status?: Status;
  }) {
    const limit = query.limit || 10; // Default to 10
    const page = query.page || 1;   // Default to page 1
    const { employment_type, status } = query;
  
    const [data, totalCount] = await this.jobsRepository.findAndCount({
      where: { employment_type, status },
      take: limit,
      skip: (page - 1) * limit,
    });
  
    const totalPages = Math.ceil(totalCount / limit);
  
    return {
      data,
      meta: {
        totalCount,
        totalPages,
        currentPage: page,
        pageSize: limit,
      },
    };
  }

  async findOne(id: number): Promise<Job> {
    const job = await this.jobsRepository.findOne({where:{id}});
    if (!job)
      throw new NotFoundException(`Job with the id ${id} was not found.`);
    return job;
  }

  async update(id: number, updateJobDto: UpdateJobDto): Promise<Job> {
    await this.findOne(id)
    await this.jobsRepository.update(id, updateJobDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.jobsRepository.delete(id);
  }
}
