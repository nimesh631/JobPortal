import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobSkill } from './jobskill.entity/jobskill.entity';
import { CreateJobSkillDto } from './dto/create-job-skill.dto';
import { UpdateJobSkillDto } from './dto/update-job-skill.dto';
import { Job } from 'src/jobs/job.entity/job.entity';
import { Skill } from 'src/skills/skill.entity/skill.entity';

@Injectable()
export class JobSkillService {
  constructor(
    @InjectRepository(JobSkill)
    private readonly jobSkillRepository: Repository<JobSkill>,
    @InjectRepository(Job)
    private readonly jobsRepository: Repository<Job>,
    @InjectRepository(Skill)
    private readonly skillRepository: Repository<Skill>,
    
  ) {}

  async create(createJobSkillDto: CreateJobSkillDto): Promise<JobSkill> {
     const jobs = await this.jobsRepository.findOne({
      where: {id: createJobSkillDto.job_id},
     });
     if(!jobs){
      throw new NotFoundException('job not found with');
     }

     const skills = await this.skillRepository.findOne({
      where: {id: createJobSkillDto.skill_id},
     });
     if(!skills){
      throw new NotFoundException('skills not found with');
     }

    const jobSkill = this.jobSkillRepository.create({...createJobSkillDto,job:jobs,skill:skills});
    return this.jobSkillRepository.save(jobSkill);
  }

  async findAll(): Promise<JobSkill[]> {
    return this.jobSkillRepository.find({relations: ['job','skill']});
  }

  async findOne(job_skill_id: number): Promise<JobSkill> {
    const availableJobSkill = this.jobSkillRepository.findOne({
      where:{job_skill_id},
    })
    if(!availableJobSkill){
      throw new NotFoundException('job skill not found')
    }
    return availableJobSkill;
  }

  async update(job_skill_id: number, updateJobSkillDto: UpdateJobSkillDto): Promise<JobSkill> {
    const jobsAvailable = await this.jobsRepository.findOne({
      where: {id: updateJobSkillDto.job_id},
    });
    if(!jobsAvailable){
      throw new NotFoundException('job not found');
    }

    const skillsAvailable = await this.skillRepository.findOne({
      where: {id: updateJobSkillDto.skill_id},
    });
    if(!skillsAvailable){
      throw new NotFoundException('skills not found');
    }

    const jobSkillsAvailable = await this.jobSkillRepository.findOne({
      where: {job_skill_id},
    });
    if(!jobSkillsAvailable){
      throw new NotFoundException('skills not found');
    }

    const updatedJobSkill = this.jobSkillRepository.create({...updateJobSkillDto,job:jobsAvailable,skill:skillsAvailable});
    return this.jobSkillRepository.save(updateJobSkillDto);
  }

  async remove(job_skill_id: number): Promise<void> {
    const jobSkillAvailable = await this.jobSkillRepository.findOne({
      where: { job_skill_id },
    });
    if (!jobSkillAvailable) {
      throw new NotFoundException('skills not found');
    }
    await this.jobSkillRepository.remove(jobSkillAvailable);
  }
}
