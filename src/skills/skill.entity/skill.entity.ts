import { JobSkill } from "src/job-skill/jobskill.entity/jobskill.entity";
import { UserSkill } from "src/user-skill/user-skill.entity/user-skill.entity";
import { PrimaryGeneratedColumn, Column, Entity, OneToMany,ManyToOne } from "typeorm";

@Entity('skills')
export class Skill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    skill_name: string;

    @OneToMany(() => UserSkill, (user_skill) => user_skill.skill)
  user_skill: UserSkill;

  @OneToMany(() => JobSkill, (job_skill) => job_skill.skill_id)
  job_skill: JobSkill;
}
