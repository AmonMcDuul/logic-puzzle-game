import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  numbers: number[] = [];

  constructor() {
    this.generateNumbers();
  }

  generateNumbers(): void {
    // for (let i = 1; i <= 100; i++) {
    //   this.numbers.push(i);
    // }
  }
}
