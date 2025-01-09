import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'src/users/user.entity/user.entity';
import { JobSkill } from 'src/job-skill/jobskill.entity/jobskill.entity';
import { Application } from 'src/applications/applications.entity/applications.entity';

@Entity('jobs') 
export class Job {
  @PrimaryGeneratedColumn()
  job_id: number;

  @Column({ length: 100 })
  title: string;

  @Column('text')
  description: string;

  @Column({ nullable: true })
  requirements?: string;

  @Column({ nullable: true })
  location?: string;

  @Column({ nullable: true })
  salary_range?: string;

  @Column({ type: 'enum', enum: ['full_time', 'part_time', 'contract', 'internship'] })
  employment_type: 'full_time' | 'part_time' | 'contract' | 'internship';

  @CreateDateColumn()
  created_at: Date; // Automatically set when the record is created

  @ManyToOne(()=>User,(user)=>user.job)
  user: User

  @OneToMany(()=>JobSkill,(jobSkill)=>jobSkill.job)
  jobSkill: JobSkill[]

  @OneToMany(()=>Application,(application)=>application.job)
  application: Application[]

}
