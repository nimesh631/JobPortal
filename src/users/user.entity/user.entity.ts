
import { Application } from 'src/applications/applications.entity/applications.entity';
import { Job } from 'src/jobs/job.entity/job.entity';
import { Resume } from 'src/resume/resume.entity/resume.entity';
import { UserSkill } from 'src/user-skill/user-skill.entity/user-skill.entity';
import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, UpdateDateColumn, OneToOne ,OneToMany} from 'typeorm'
import { userRole } from '../dto/user-role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phone_number: string;

  @Column({
    type: 'enum',
    enum: userRole,
  })
  role: userRole;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Job, (job) => job.user)
  jobs: Job[];

  @OneToMany(() => Application, (application) => application.user)
  application: Application;

  @OneToOne(() => Resume, (resume) => resume.user)
  resume: Resume;

  @OneToMany(() => UserSkill, (user_skill) => user_skill.user_id)
  user_skill: UserSkill;
}