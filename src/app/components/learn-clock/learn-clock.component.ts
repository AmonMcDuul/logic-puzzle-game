import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClockComponent } from "./clock/clock.component";

@Component({
  selector: 'app-learn-clock',
  standalone: true,
  templateUrl: './learn-clock.component.html',
  styleUrls: ['./learn-clock.component.scss'],
  imports: [CommonModule, ClockComponent]
})
export class LearnClockComponent {
  timeOptions: string[] = ['full', 'half', 'quarterBefore', 'quarterAfter'];
  selectedTimeOption: string = 'full';
  randomMinute: number = 0;
  randomHour: number = 0;
  minute: number = 0;
  hour: number = 0;
  hours: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12];
  minutes: Array<number> = [0,15,30,45];
  score: number = 0;
  options: Array<{hour: number, minute: number}> = [];

  constructor() { }

  ngOnInit() {
    this.resetClock();
  }

  resetClock() {
    this.randomHour = Math.floor(Math.random() * this.hours.length) + 1;
    this.randomMinute = this.minutes[Math.floor(Math.random() * this.minutes.length)];
    this.hour = (this.randomHour % 12) * 30 + (this.randomMinute / 2);
    this.minute = this.randomMinute * 6;
    this.generateOptions();
  }

  generateOptions() {
    this.options = [];
    const correctOption = { hour: this.randomHour, minute: this.randomMinute };
    this.options.push(correctOption);

    while (this.options.length < 4) {
      const hour = Math.floor(Math.random() * this.hours.length) + 1;
      const minute = this.minutes[Math.floor(Math.random() * this.minutes.length)];
      if (!this.options.some(option => option.hour === hour && option.minute === minute)) {
        this.options.push({ hour, minute });
      }
    }

    this.options = this.shuffleArray(this.options);
  }

  shuffleArray(array: Array<any>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  checkAnswer(option: { hour: number, minute: number }) {
    if (option.hour === this.randomHour && option.minute === this.randomMinute) {
      this.score++;
      this.resetClock();
    }
  }

  formatTime(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }

  formatTimeInDutch(hour: number, minute: number): string {
    if (minute === 0) {
      return `${hour} uur`;
    }
    if (minute === 15) {
      return `kwart over ${hour}`;
    }
    if (minute === 30) {
      return `half ${hour === 12 ? 1 : hour + 1}`;
    }
    if (minute === 45) {
      return `kwart voor ${hour === 12 ? 1 : hour + 1}`;
    }
    return '';
  }
}
