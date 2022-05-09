import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdInputComponent } from './passwd-input.component';

describe('PasswdInputComponent', () => {
  let component: PasswdInputComponent;
  let fixture: ComponentFixture<PasswdInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswdInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
