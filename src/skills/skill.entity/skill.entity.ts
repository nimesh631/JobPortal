import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity('skills')
export class Skill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    skill_name: string;
}
