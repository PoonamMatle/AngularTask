import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TKAComponent } from './tka.component';

describe('TKAComponent', () => {
  let component: TKAComponent;
  let fixture: ComponentFixture<TKAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TKAComponent]
    });
    fixture = TestBed.createComponent(TKAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
