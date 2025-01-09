import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class JobSkill {
  @PrimaryGeneratedColumn()
  job_skill_id: number;

  @Column()
  job_id: number;

  @Column()
  skill_id: number;
}
