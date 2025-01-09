import { Job } from 'src/jobs/job.entity/job.entity';
import { Resume } from 'src/resume/resume.entity/resume.entity';
import { User } from 'src/users/user.entity/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

export enum ApplicationStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

@Entity('applications')
export class Application {
  @PrimaryGeneratedColumn()
  application_id: number;

  @Column()
  job_id: number;

  @Column()
  application_date: string;

  @Column({ type: 'enum', enum: ApplicationStatus })
  status: ApplicationStatus;

  @ManyToOne(()=>User,(user)=>user.application)
  user:User

  @ManyToOne(() => Resume, (resume) =>resume.application)
 resume: Resume

 @ManyToOne(()=>Job,(job)=>job.application)
 job: Job
}
