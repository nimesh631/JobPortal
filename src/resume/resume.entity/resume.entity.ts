import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'src/users/user.entity/user.entity';
import { Application } from 'src/applications/applications.entity/applications.entity';

@Entity('resumes')
export class Resume {
  @PrimaryGeneratedColumn()
  resume_id: number;

  @Column()
  resume_file: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.resume, { onDelete: 'CASCADE' })
  user: User;  // The foreign key reference properly set to 'userId'

  @OneToMany(() => Application, (application) => application.resume)
  application: Application[];
}
