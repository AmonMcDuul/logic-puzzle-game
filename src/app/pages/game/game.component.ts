import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SimpleMathComponent } from '../../components/simple-math/simple-math.component';
import { TimerComponent } from "../../components/timer/timer.component";

@Component({
    selector: 'app-game',
    standalone: true,
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss',
    imports: [CommonModule, SimpleMathComponent, TimerComponent]
})
export class GameComponent {
  numbers: number[] = [];

  constructor() {
    this.generateNumbers();
  }

  generateNumbers(): void {
    for (let i = 1; i <= 50; i++) {
      this.numbers.push(i);
    }
  }
}
