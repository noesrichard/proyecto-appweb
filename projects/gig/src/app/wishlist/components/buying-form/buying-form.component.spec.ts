import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingFormComponent } from './buying-form.component';

describe('BuyingFormComponent', () => {
  let component: BuyingFormComponent;
  let fixture: ComponentFixture<BuyingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
