import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
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
}
