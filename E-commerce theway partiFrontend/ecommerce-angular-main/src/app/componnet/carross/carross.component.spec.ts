import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrossComponent } from './carross.component';

describe('CarrossComponent', () => {
  let component: CarrossComponent;
  let fixture: ComponentFixture<CarrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
