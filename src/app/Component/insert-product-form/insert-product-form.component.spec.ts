import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProductFormComponent } from './insert-product-form.component';

describe('InsertProductFormComponent', () => {
  let component: InsertProductFormComponent;
  let fixture: ComponentFixture<InsertProductFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertProductFormComponent]
    });
    fixture = TestBed.createComponent(InsertProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
