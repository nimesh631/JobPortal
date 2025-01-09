import { application } from 'express';
import { Application } from 'src/applications/applications.entity/applications.entity';
import { Job } from 'src/jobs/job.entity/job.entity';
import { Resume } from 'src/resume/resume.entity/resume.entity';
import { UserSkill } from 'src/user-skill/user-skill.entity/user-skill.entity';
import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    password_hash: string;

    @Column()
    full_name: string;

    @Column({ type: 'enum', enum: ['job_seeker', 'employer'] })
     user_type: 'job_seeker' | 'employer';

     @CreateDateColumn()
     created_at: Date;
   
     @UpdateDateColumn()
     updated_at: Date;

     @OneToMany(()=>Resume,(resume)=>resume.user)
     resume:Resume[]

     @OneToMany(()=>Application,(application)=>application.user)
     application: Application[]

     @OneToMany(()=>Job,(job)=>job.user)
     job: Job[]

     @OneToMany(()=>UserSkill,(userSkill)=>userSkill.user)
     userSkill: UserSkill[]

}
