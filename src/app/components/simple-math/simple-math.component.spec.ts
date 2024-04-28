import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMathComponent } from './simple-math.component';

describe('SimpleMathComponent', () => {
  let component: SimpleMathComponent;
  let fixture: ComponentFixture<SimpleMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleMathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
