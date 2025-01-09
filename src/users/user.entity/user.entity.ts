import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, UpdateDateColumn } from 'typeorm'

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
}
