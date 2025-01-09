import { Test, TestingModule } from '@nestjs/testing';
import { JobSkillController } from './job-skill.controller';

describe('JobSkillController', () => {
  let controller: JobSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobSkillController],
    }).compile();

    controller = module.get<JobSkillController>(JobSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
