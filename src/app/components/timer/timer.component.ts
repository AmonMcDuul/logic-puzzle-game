import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})

export class TimerComponent implements OnInit {
  timer: string = '00:00:00.000';
  milliseconds: number = 0;
  timerInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.milliseconds += 10;
      this.updateTimer();
    }, 10);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }

  resetTimer() {
    this.stopTimer();
    this.milliseconds = 0;
    this.updateTimer();
  }

  updateTimer() {
    const hours = this.padWithZero(Math.floor(this.milliseconds / (1000 * 60 * 60)));
    const minutes = this.padWithZero(Math.floor((this.milliseconds % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = this.padWithZero(Math.floor((this.milliseconds % (1000 * 60)) / 1000));
    const ms = this.padMilliseconds(this.milliseconds % 1000).substring(0, 2);
    this.timer = `${hours}:${minutes}:${seconds}.${ms}`;
  }

  padWithZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  padMilliseconds(value: number): string {
    return value < 10 ? '00' + value : value < 100 ? '0' + value : value.toString();
  }
}
