import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatFunctionsComponent } from './boat-functions.component';

describe('BoatFunctionsComponent', () => {
  let component: BoatFunctionsComponent;
  let fixture: ComponentFixture<BoatFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
