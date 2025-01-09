import { IsString, IsInt } from 'class-validator';

export class CreateResumeDto {
  @IsInt()
  user_id: number;

  @IsString()
  resume_file: string;
}
