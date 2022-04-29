import { TestBed } from '@angular/core/testing';

import { EventtService } from './event.service';

describe('EventService', () => {
  let service: EventtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});