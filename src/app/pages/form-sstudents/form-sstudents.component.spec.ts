import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSstudentsComponent } from './form-sstudents.component';

describe('FormSstudentsComponent', () => {
  let component: FormSstudentsComponent;
  let fixture: ComponentFixture<FormSstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSstudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
