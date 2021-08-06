import { TestBed } from '@angular/core/testing';

import { NbaService } from './nba.service';

describe('NBAServiceService', () => {
  let service: NbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
