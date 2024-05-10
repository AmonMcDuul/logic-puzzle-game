import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-math',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './simple-math.component.html',
  styleUrls: ['./simple-math.component.scss']
})
export class SimpleMathComponent {
  level: number = 1;
  question: string = '';
  result: number = 0;
  answer: string = '';
  keypadDigits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  operators: string[] = ['+', '-', '*', '/'];
  selectedOperators: string[] = ['+'];

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
    if (parseInt(this.answer, 10) === this.result) {
      alert('Correct!');
      this.level++;
      this.answer = "";
      this.generateQuestion();
    } else {
      alert('Incorrect. Try again.');
    }
  }

  generateQuestion(): void {
    let firstNumber = Math.floor(Math.random() * 9) + 1;
    let secondNumber = Math.floor(Math.random() * 9) + 1;
    let operator = this.getRandomOperator();
    if ((operator === '-' || operator === '/') && firstNumber < secondNumber) {
      const temp = firstNumber;
      firstNumber = secondNumber;
      secondNumber = temp;
    }
    if (operator === '/') {
      firstNumber = firstNumber * secondNumber;
    }
    this.result = this.performOperation(firstNumber, secondNumber, operator);
    this.question = `${firstNumber} ${operator} ${secondNumber} =`;
  }

  private performOperation(firstNumber: number, secondNumber: number, operator: string): number {
    switch (operator) {
      case '+':
        return firstNumber + secondNumber;
      case '-':
        return firstNumber - secondNumber;
      case '/':
        return firstNumber / secondNumber;
      case '*':
        return firstNumber * secondNumber;
      default:
        throw new Error('Invalid operator');
    }
  }

  getRandomOperator(): string {
    if (this.selectedOperators.length === 0) {
      const randomIndex = Math.floor(Math.random() * this.operators.length);
      return this.operators[randomIndex];
    }
    const randomIndex = Math.floor(Math.random() * this.selectedOperators.length);
    return this.selectedOperators[randomIndex];
  }

  toggleOperator(operator: string): void {
    const index = this.selectedOperators.indexOf(operator);
    if (index !== -1) {
      this.selectedOperators.splice(index, 1);
    } else {
      this.selectedOperators.push(operator); 
    }
  }

  isOperatorSelected(operator: string): boolean {
    return this.selectedOperators.includes(operator);
  }
}