import {async, TestBed} from '@angular/core/testing';

import { NbaService } from './nba.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('NBAServiceService', () => {

  let service: NbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('Should retrieve response from web service', (done) => {
  //
  //   service.getPlayers().subscribe(players => {
  //   },error => {
  //     expect(1).toBe(1);
  //   }, () => {
  //     expect(1).toBe(2);
  //   });
  //
  //
  //
  //   // service.test(() => {
  //   //   expect(1).toBe(2);
  //   //   done();
  //   // });
  // }, 2000);
});
