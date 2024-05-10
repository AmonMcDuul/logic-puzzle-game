import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-math',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simple-math.component.html',
  styleUrls: ['./simple-math.component.scss']
})
export class SimpleMathComponent {
  // @Input() level: number | undefined;
  // @Input() question: string | undefined;
  level: number = 1;
  question: string = '';

  answer: string = '';
  keypadDigits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  constructor() { }

  ngOnInit(): void {
    this.generateQuestion();
  }

  addToAnswer(digit: number) {
    this.answer += digit.toString();
}

  clearAnswer() {
    this.answer = '';
  }

  checkAnswer(): void {
    if (this.question.includes('+')) {
      const firstNumber = parseInt(this.question.split(' ')[0], 10);
      const secondNumber = parseInt(this.question.split(' ')[2], 10);
      if (parseInt(this.answer, 10) === firstNumber + secondNumber) {
        alert('Correct!');
        this.level++;
        this.generateQuestion();
      } else {
        alert('Incorrect. Try again.');
      }
    } else {
      const firstNumber = parseInt(this.question.split(' ')[0], 10);
      const secondNumber = parseInt(this.question.split(' ')[2], 10);
      if (parseInt(this.answer, 10) === firstNumber - secondNumber) {
        alert('Correct!');
        this.level++;
        this.generateQuestion();
      } else {
        alert('Incorrect. Try again.');
      }
    }
  }

  generateQuestion(): void {
    let firstNumber = Math.floor(Math.random() * 10);
    let secondNumber = Math.floor(Math.random() * 10);
    let operator = ['+', '-'][Math.floor(Math.random() * 2)];

    if (operator === '-' && firstNumber < secondNumber) {
      const temp = firstNumber;
      firstNumber = secondNumber;
      secondNumber = temp;
    }

    this.question = `${firstNumber} ${operator} ${secondNumber} =`;
  }

}