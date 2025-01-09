import { Job } from 'src/jobs/job.entity/job.entity';
import { Skill } from 'src/skills/skill.entity/skill.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class JobSkill {
  @PrimaryGeneratedColumn()
  job_skill_id: number;

  @Column()
  job_id: number;

  @ManyToOne(()=>Job,(job)=>job.jobSkill)
  job: Job

  @ManyToOne(()=>Skill,(skill)=>skill.jobSkill)
  skill: Skill
}
