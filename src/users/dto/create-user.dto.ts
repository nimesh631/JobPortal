import { IsString, IsEmail, IsEnum, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password_hash: string;

  @IsString()
  full_name: string;

  @IsEnum(['job_seeker', 'employer'])
  user_type: 'job_seeker' | 'employer';

  @IsOptional()
  @IsString()
  company_name?: string;
}
