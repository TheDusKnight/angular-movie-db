import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouseCardComponent } from './carouse-card.component';

describe('CarouseCardComponent', () => {
  let component: CarouseCardComponent;
  let fixture: ComponentFixture<CarouseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
