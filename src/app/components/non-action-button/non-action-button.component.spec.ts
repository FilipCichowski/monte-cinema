import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonActionButtonComponent } from './non-action-button.component';

describe('NonActionButtonComponent', () => {
  let component: NonActionButtonComponent;
  let fixture: ComponentFixture<NonActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonActionButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NonActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
