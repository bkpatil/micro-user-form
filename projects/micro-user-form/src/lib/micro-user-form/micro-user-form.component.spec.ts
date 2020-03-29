import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroUserFormComponent } from './micro-user-form.component';

describe('MicroUserFormComponent', () => {
  let component: MicroUserFormComponent;
  let fixture: ComponentFixture<MicroUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
