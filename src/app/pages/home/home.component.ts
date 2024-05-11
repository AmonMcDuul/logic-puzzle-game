import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  trails: { x: number, y: number }[] = [];
  

  constructor(private router: Router) {}
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.trails.push({ x: event.clientX, y: event.clientY });
    if (this.trails.length > 20) {
      this.trails.shift();
    }
  }
  newGame(gameType: string) {
    this.router.navigate(['/game', { type: gameType }]);
  }
}