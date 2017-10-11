import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellContentComponent } from './shell-content.component';

describe('ShellContentComponent', () => {
  let component: ShellContentComponent;
  let fixture: ComponentFixture<ShellContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
