import { Job } from 'src/jobs/job.entity/job.entity';
import { ApplicationStatus } from '../dto/applications-status.enum';
import { User } from 'src/users/user.entity/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne ,CreateDateColumn} from 'typeorm';


@Entity('applications')
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  application_date: Date;

  @Column({
    type: 'enum',
    enum: ApplicationStatus,
    default: ApplicationStatus.PENDING,
  })
  status: ApplicationStatus;

  @ManyToOne(()=>User,(user)=>user.application)
  user:User

 @ManyToOne(()=>Job,(job)=>job.application)
 job: Job
}
