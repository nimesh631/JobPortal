import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { User } from 'src/users/user.entity/user.entity';

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file_url: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => User, (user) => user.resume)
  user: User;
}
