import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsBaseComponent } from './chartjs-base.component';

describe('ChartjsBaseComponent', () => {
  let component: ChartjsBaseComponent;
  let fixture: ComponentFixture<ChartjsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartjsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
