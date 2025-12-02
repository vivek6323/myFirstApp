import { TestBed } from '@angular/core/testing';

import { AppDeactivateGaurdService } from './app-deactivate-gaurd-service';

describe('AppDeactivateGaurdService', () => {
  let service: AppDeactivateGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDeactivateGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
