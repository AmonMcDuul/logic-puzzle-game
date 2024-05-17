import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent {
  @Input() hour: number = 0;
  @Input() minute: number = 0;

  constructor() { }

}
