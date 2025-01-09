import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
  user_id: number;

  @Column()
  job_id: number;

  @Column()
  application_date: string;

  @Column({ type: 'enum', enum: ApplicationStatus })
  status: ApplicationStatus;
}
