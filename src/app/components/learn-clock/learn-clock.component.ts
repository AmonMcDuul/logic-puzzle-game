import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn-clock.component.html',
  styleUrl: './learn-clock.component.scss'
})
export class LearnClockComponent {
  timeOptions: string[] = ['full', 'half', 'quarterBefore', 'quarterAfter'];
  selectedTimeOption: string = 'full';
  currentTime: string = "";
  hours: number = 0;
  minutes: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.generateRandomTime();
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  generateRandomTime(): void {
    this.hours = Math.floor(Math.random() * 12) + 1;
    this.minutes = Math.floor(Math.random() * 60);
    this.updateClock();
  }

  updateClock(): void {
    const now = new Date();
    this.hours = now.getHours() % 12 || 12; // Convert to 12-hour format
    this.minutes = now.getMinutes();
    this.currentTime = this.getTimeDescription(this.hours, this.minutes);
  }

  getTimeDescription(hours: number, minutes: number): string {
    let timeDescription = '';
    const minuteText = minutes === 0 ? '' : minutes === 30 ? 'half' : minutes < 30 ? 'quarter before' : 'quarter after';
    const hourText = hours;
    timeDescription = `${hourText} ${minuteText}`;
    return timeDescription;
  }

  changeTimeOption(option: string): void {
    this.selectedTimeOption = option;
    this.generateRandomTime();
  }
}