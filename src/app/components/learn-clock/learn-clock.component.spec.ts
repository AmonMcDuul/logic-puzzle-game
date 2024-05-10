import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnClockComponent } from './learn-clock.component';

describe('LearnClockComponent', () => {
  let component: LearnClockComponent;
  let fixture: ComponentFixture<LearnClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnClockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
