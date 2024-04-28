import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-math',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simple-math.component.html',
  styleUrl: './simple-math.component.scss'
})
export class SimpleMathComponent {
  answer: number = 0;

  checkAnswer(): void {
    if (this.answer === 8) {
      console.log('Correct!');
    } else {
      console.log('Incorrect!');
    }
  }
}
