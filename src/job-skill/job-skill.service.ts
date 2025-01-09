import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobSkill } from './jobskill.entity/jobskill.entity';
import { CreateJobSkillDto } from './dto/create-job-skill.dto';
import { UpdateJobSkillDto } from './dto/update-job-skill.dto';

@Injectable()
export class JobSkillService {
  constructor(
    @InjectRepository(JobSkill)
    private readonly jobSkillRepository: Repository<JobSkill>,
  ) {}

  async create(createJobSkillDto: CreateJobSkillDto): Promise<JobSkill> {
    const jobSkill = this.jobSkillRepository.create(createJobSkillDto);
    return this.jobSkillRepository.save(jobSkill);
  }

  async findAll(): Promise<JobSkill[]> {
    return this.jobSkillRepository.find();
  }

  async findOne(id: number): Promise<JobSkill> {
    return this.jobSkillRepository.findOne({ where: { job_skill_id: id } });
  }

  async update(id: number, updateJobSkillDto: UpdateJobSkillDto): Promise<JobSkill> {
    await this.jobSkillRepository.update(id, updateJobSkillDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.jobSkillRepository.delete(id);
  }
}
