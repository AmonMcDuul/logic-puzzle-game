import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterFinderComponent } from './letter-finder.component';

describe('LetterFinderComponent', () => {
  let component: LetterFinderComponent;
  let fixture: ComponentFixture<LetterFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterFinderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetterFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
