import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult ,Repository } from 'typeorm';
import { Resume } from './resume.entity/resume.entity';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { User } from 'src/users/user.entity/user.entity';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume)
    private readonly resumeRepository: Repository<Resume>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  
  async create(createResumeDto: CreateResumeDto): Promise<Resume> {
    const users = await this.userRepository.findOne({
      where:{id: createResumeDto.userId},
    });
    console.log(users, 'users ');
    if (!users) {
      throw new Error('user id not found');
    }

    const resumeData = this.resumeRepository.create({
      user: users,
      ...createResumeDto
    });
    return this.resumeRepository.save(resumeData);
  }

  async findAll(): Promise<Resume[]> {
    return this.resumeRepository.find({ relations: ['user']});
  }


  async findOne(id: number): Promise<Resume> {
    const result = await this.resumeRepository.findOne({
      where: {id},
    });

    if(!result){
      throw new NotFoundException(`cannot find the reusme with ${id}` );
    }
    return result;
  }

  async update(id: number, updateResumeDto: UpdateResumeDto): Promise<Resume> {
    const resume = await this.resumeRepository.findOne({
      where:{id},
    });
    if (!resume) {
      throw new Error('resume id not found');
    }

    const users = await this.userRepository.findOne({
      where:{id: updateResumeDto.userId},
    });

    if (!users) {
      throw new Error('User id not found');
    }

    const updateResumeData = this.resumeRepository.create({
      ...resume,
      ...updateResumeDto,
      user: users,
    });
    return this.resumeRepository.save(updateResumeData);
  }


  async delete(resume_id: number): Promise<DeleteResult> {
    const result = await this.resumeRepository.delete(resume_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Resume with ID ${resume_id} not found.`);
    }
    return result;
  }
}
