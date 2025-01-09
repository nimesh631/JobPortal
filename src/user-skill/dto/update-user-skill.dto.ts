import { IsInt, IsOptional } from 'class-validator';

export class UpdateUserSkillDto {
  @IsOptional()
  @IsInt()
  user_id?: number;

  @IsOptional()
  @IsInt()
  skill_id?: number;
}
