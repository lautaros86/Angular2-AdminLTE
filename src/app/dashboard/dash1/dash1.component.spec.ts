import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dash1Component } from './dash1.component';

describe('Dash1Component', () => {
  let component: Dash1Component;
  let fixture: ComponentFixture<Dash1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dash1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dash1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
