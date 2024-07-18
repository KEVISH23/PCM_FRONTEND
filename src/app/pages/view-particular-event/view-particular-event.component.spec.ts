import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParticularEventComponent } from './view-particular-event.component';

describe('ViewParticularEventComponent', () => {
  let component: ViewParticularEventComponent;
  let fixture: ComponentFixture<ViewParticularEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewParticularEventComponent]
    });
    fixture = TestBed.createComponent(ViewParticularEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
