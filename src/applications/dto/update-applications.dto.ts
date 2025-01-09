
import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationDto } from './create-applications.dto';

export class UpdateApplicationDto extends PartialType(CreateApplicationDto) {}
