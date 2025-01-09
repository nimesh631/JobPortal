
import { IsInt, IsEnum, IsDateString } from 'class-validator';
import { ApplicationStatus} from './applications-status.enum'

export class CreateApplicationDto {
  @IsInt()
  user_id: number;

  @IsInt()
  job_id: number;

  @IsDateString()
  application_date: string;

  @IsEnum(ApplicationStatus)
  status: ApplicationStatus;
}
