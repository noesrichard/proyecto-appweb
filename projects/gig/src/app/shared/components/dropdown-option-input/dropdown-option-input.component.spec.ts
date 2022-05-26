import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownOptionInputComponent } from './dropdown-option-input.component';

describe('DropdownOptionInputComponent', () => {
  let component: DropdownOptionInputComponent;
  let fixture: ComponentFixture<DropdownOptionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownOptionInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownOptionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
