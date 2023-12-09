import { TestBed } from '@angular/core/testing';

import { ActionservicesService } from './actionservices.service';

describe('ActionservicesService', () => {
  let service: ActionservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
