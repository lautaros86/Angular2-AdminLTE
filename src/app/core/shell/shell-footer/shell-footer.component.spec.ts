import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellFooterComponent } from './shell-footer.component';

describe('ShellFooterComponent', () => {
  let component: ShellFooterComponent;
  let fixture: ComponentFixture<ShellFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
