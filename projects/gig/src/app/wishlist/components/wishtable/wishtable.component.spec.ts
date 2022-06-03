import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishtableComponent } from './wishtable.component';

describe('WishtableComponent', () => {
  let component: WishtableComponent;
  let fixture: ComponentFixture<WishtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
