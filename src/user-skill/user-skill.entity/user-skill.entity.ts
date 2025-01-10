import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/users/user.entity/user.entity';
import { Skill } from 'src/skills/skill.entity/skill.entity';
@Entity()
export class UserSkill {
  @PrimaryGeneratedColumn()
  user_skill_id: number;

  @Column()
  user_id: number;

  @Column()
  skill_id: number;

  @ManyToOne(()=>User,(user)=>user.user_skill)
  user: User

  @ManyToOne(()=>Skill,(skill)=>skill.user_skill)
    skill:Skill
}