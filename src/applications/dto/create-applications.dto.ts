
import { IsInt, IsEnum, IsOptional } from 'class-validator';
import { ApplicationStatus} from './applications-status.enum'

export class CreateApplicationDto {
  @IsInt()
  jobId: number;

  @IsInt()
  userId: number;

  @IsOptional()
  @IsEnum(ApplicationStatus)
  status?: ApplicationStatus;
}
