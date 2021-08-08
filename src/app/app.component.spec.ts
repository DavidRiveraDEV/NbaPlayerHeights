import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {PlayersResponse} from "./model/PlayersResponse";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NBA Player Heights'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('NBA Player Heights');
  });

  it(`should find pairs from raw example data'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const data = {"values":[{"first_name":"Alex","h_in":"77","h_meters":"1.96","last_name":"Acker"},{"first_name":"Hassan","h_in":"76","h_meters":"1.93","last_name":"Adams"},{"first_name":"Arron","h_in":"77","h_meters":"1.96","last_name":"Afflalo"},{"first_name":"Maurice","h_in":"77","h_meters":"1.96","last_name":"Ager"},{"first_name":"Alexis","h_in":"84","h_meters":"2.13","last_name":"Ajinca"},{"first_name":"LaMarcus","h_in":"83","h_meters":"2.11","last_name":"Aldridge"},{"first_name":"Joe","h_in":"80","h_meters":"2.03","last_name":"Alexander"},{"first_name":"Malik","h_in":"82","h_meters":"2.08","last_name":"Allen"}]};
    const playersResponse = Object.assign(new PlayersResponse(), data);
    debugger
    expect(app.getResults(playersResponse.values, 139).length).toEqual(0);
    expect(app.getResults(playersResponse.values, 153).length).toEqual(3);
    expect(app.getResults(playersResponse.values, 160).length).toEqual(4);
  });
});
