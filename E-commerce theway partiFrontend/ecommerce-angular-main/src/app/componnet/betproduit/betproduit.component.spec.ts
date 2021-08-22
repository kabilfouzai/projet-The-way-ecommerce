import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetproduitComponent } from './betproduit.component';

describe('BetproduitComponent', () => {
  let component: BetproduitComponent;
  let fixture: ComponentFixture<BetproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
