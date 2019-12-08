import { TestBed } from '@angular/core/testing';

import { SkillsDbService } from './skills-db.service';

describe('SkillsDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillsDbService = TestBed.get(SkillsDbService);
    expect(service).toBeTruthy();
  });
});
