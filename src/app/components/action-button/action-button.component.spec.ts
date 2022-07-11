import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACTIONBUTTONComponent } from './action-button.component';

describe('ACTIONBUTTONComponent', () => {
  let component: ACTIONBUTTONComponent;
  let fixture: ComponentFixture<ACTIONBUTTONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACTIONBUTTONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACTIONBUTTONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
