import { TestBed } from '@angular/core/testing';

import { MyContentsService } from './mycontents.service';

describe('MyContentsService', () => {
  let service: MyContentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyContentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
