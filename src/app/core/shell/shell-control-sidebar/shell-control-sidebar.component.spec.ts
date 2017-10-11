import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellControlSidebarComponent } from './shell-control-sidebar.component';

describe('ShellControlSidebarComponent', () => {
  let component: ShellControlSidebarComponent;
  let fixture: ComponentFixture<ShellControlSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellControlSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellControlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
