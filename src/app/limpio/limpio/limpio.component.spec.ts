import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpioComponent } from './limpio.component';

describe('LimpioComponent', () => {
  let component: LimpioComponent;
  let fixture: ComponentFixture<LimpioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
