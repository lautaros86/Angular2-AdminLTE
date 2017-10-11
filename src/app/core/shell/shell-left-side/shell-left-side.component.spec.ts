import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellLeftSideComponent } from './shell-left-side.component';

describe('ShellLeftSideComponent', () => {
  let component: ShellLeftSideComponent;
  let fixture: ComponentFixture<ShellLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
