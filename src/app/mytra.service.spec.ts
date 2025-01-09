import { TestBed } from '@angular/core/testing';

import { MytraService } from './mytra.service';

describe('MytraService', () => {
  let service: MytraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
