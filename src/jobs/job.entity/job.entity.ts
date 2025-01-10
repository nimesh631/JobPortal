import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'src/users/user.entity/user.entity';
import { JobSkill } from 'src/job-skill/jobskill.entity/jobskill.entity';
import { Application } from 'src/applications/applications.entity/applications.entity';
import { Status } from '../dto/job-status-enum';
import { JobType } from '../dto/job-type-enum';

@Entity('jobs') 
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column({ type: 'enum', enum: JobType })
  employment_type: JobType;

  @Column()
  salary_range: number;

  @CreateDateColumn()
  posted_date: Date;

  @Column()
  application_deadline: Date;

  @Column({ type: 'enum', enum: Status })
  status: Status;

  @ManyToOne(() => User, (user) => user.jobs, { nullable: false })
  user: User;

  @OneToMany(() => Application, (application) => application.job)
  application: Application;

  @OneToMany(() => JobSkill, (job_skill) => job_skill.job_id)
  job_skill: JobSkill;

}
