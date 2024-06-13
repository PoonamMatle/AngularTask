import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodIteamComponent } from './food-iteam.component';

describe('FoodIteamComponent', () => {
  let component: FoodIteamComponent;
  let fixture: ComponentFixture<FoodIteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodIteamComponent]
    });
    fixture = TestBed.createComponent(FoodIteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
