import { JobSkill } from "src/job-skill/jobskill.entity/jobskill.entity";
import { UserSkill } from "src/user-skill/user-skill.entity/user-skill.entity";
import { PrimaryGeneratedColumn, Column, Entity, OneToMany,ManyToOne } from "typeorm";

@Entity('skills')
export class Skill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    skill_name: string;

    @OneToMany(()=>UserSkill,(userSkill)=>userSkill.skill)
    userSkill: UserSkill[]

    @OneToMany(()=>JobSkill,(jobSkill)=>jobSkill.skill)
    jobSkill: JobSkill[];
}
