import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingcompComponent } from './bindingcomp.component';

describe('BindingcompComponent', () => {
  let component: BindingcompComponent;
  let fixture: ComponentFixture<BindingcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingcompComponent]
    });
    fixture = TestBed.createComponent(BindingcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
