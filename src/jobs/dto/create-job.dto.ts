import { IsNotEmpty, IsString, IsEnum, IsOptional } from 'class-validator';

export class CreateJobDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  requirements?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  salary_range?: string;

  @IsNotEmpty()
  @IsEnum(['full_time', 'part_time', 'contract', 'internship'])
  employment_type: 'full_time' | 'part_time' | 'contract' | 'internship';
}
