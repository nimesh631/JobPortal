import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resume } from './resume.entity/resume.entity';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume)
    private readonly resumeRepository: Repository<Resume>,
  ) {}


  async create(createResumeDto: CreateResumeDto): Promise<Resume> {
    const resume = this.resumeRepository.create(createResumeDto);
    return this.resumeRepository.save(resume);
  }

  async findAll(): Promise<Resume[]> {
    return this.resumeRepository.find();
  }


  async findOne(id: number): Promise<Resume> {
    return this.resumeRepository.findOne({ where: { resume_id: id } });
  }


  async update(id: number, updateResumeDto: UpdateResumeDto): Promise<Resume> {
    await this.resumeRepository.update(id, updateResumeDto);
    return this.findOne(id);
  }


  async remove(id: number): Promise<void> {
    await this.resumeRepository.delete(id);
  }
}
