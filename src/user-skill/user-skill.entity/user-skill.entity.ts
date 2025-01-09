import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserSkill {
  @PrimaryGeneratedColumn()
  user_skill_id: number;

  @Column()
  user_id: number;

  @Column()
  skill_id: number;

}