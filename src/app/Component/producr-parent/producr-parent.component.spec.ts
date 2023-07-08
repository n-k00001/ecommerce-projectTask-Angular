import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducrParentComponent } from './producr-parent.component';

describe('ProducrParentComponent', () => {
  let component: ProducrParentComponent;
  let fixture: ComponentFixture<ProducrParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducrParentComponent]
    });
    fixture = TestBed.createComponent(ProducrParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
