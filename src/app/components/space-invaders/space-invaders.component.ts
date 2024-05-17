import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-space-invaders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './space-invaders.component.html',
  styleUrls: ['./space-invaders.component.scss']
})

export class SpaceInvadersComponent {
  player = {
    x: 0,
    y: 0,
    width: 30,
    height: 30
  };

  enemies: Enemy[] = [];
  projectiles: Projectile[] = [];

  gameLoop: any;
  gameOver: boolean = false;
  score: number = 0;
  enemyCount: number = 10;
  enemySpeed: number = 2;

  constructor(private elementRef: ElementRef) {
    this.player.x = window.innerWidth / 2 - this.player.width / 2;
    this.player.y = window.innerHeight - 100;

    for (let i = 0; i < this.enemyCount; i++) {
      this.enemies.push({
        x: (Math.random() * (window.innerWidth - 30 - 400)) + 200,
        y: Math.random() * (window.innerHeight / 2),
        width: 30,
        height: 30,
        speed: this.enemySpeed,
      });
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.player.x = event.clientX - this.player.width / 2;
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.shoot();
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    this.player.x = event.touches[0].clientX - this.player.width / 2;
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.player.x = Math.max(0, this.player.x - 10);
    } else if (event.key === 'ArrowRight') {
      this.player.x = Math.min(window.innerWidth - this.player.width, this.player.x + 10);
    } else if (event.key === ' ') {
      this.shoot();
    }
  }

  ngAfterViewInit() {
    this.gameLoop = setInterval(() => {
      this.updateGameState();
    }, 1000 / 60);
  }

  ngOnDestroy() {
    clearInterval(this.gameLoop);
  }

  updateGameState() {
    this.updateEnemyPositions();
    this.updateProjectilePositions();
    this.checkCollisions();
  }

  updateEnemyPositions() {
    this.enemies.forEach((enemy) => {
      enemy.x += enemy.speed;

      if (enemy.x < 0 || enemy.x + enemy.width > (window.innerWidth - 100) || enemy.x + enemy.width < 110) {
        enemy.speed *= -1;
        enemy.y += enemy.height;
      }
    });
  }

  updateProjectilePositions() {
    this.projectiles = this.projectiles.filter((projectile) => {
      projectile.y -= projectile.speed;
      return projectile.y > 0;
    });
  }

  checkCollisions() {
    this.enemies = this.enemies.filter((enemy) => {
      if (
        this.player.x < enemy.x + enemy.width &&
        this.player.x + this.player.width > enemy.x &&
        this.player.y < enemy.y + enemy.height &&
        this.player.y + this.player.height > enemy.y
      ) {
        this.gameOver = true;
        return false;
      }

      return true;
    });

    this.projectiles.forEach((projectile) => {
      this.enemies = this.enemies.filter((enemy) => {
        if (
          projectile.x < enemy.x + enemy.width &&
          projectile.x + projectile.width > enemy.x &&
          projectile.y < enemy.y + enemy.height &&
          projectile.y + projectile.height > enemy.y
        ) {
          this.score++;
          return false;
        }

        return true;
      });
    });

    if (this.enemies.length === 0) {
      this.restartGame();
    }
  }

  restartGame() {
    this.enemies = [];
    this.enemySpeed = this.enemySpeed * 1.5;
    this.enemyCount = this.enemyCount * 1.2;
    for (let i = 0; i < this.enemyCount; i++) {
      this.enemies.push({
        x: (Math.random() * (window.innerWidth - 30 - 400)) + 200,
        y: Math.random() * (window.innerHeight / 2),
        width: 30,
        height: 30,
        speed: this.enemySpeed
      });
    }
  }

  shoot() {
    this.projectiles.push({
      x: this.player.x + this.player.width / 2 - 5,
      y: this.player.y - 0,
      width: 10,
      height: 10,
      speed: 5
    });
  }
}

interface Enemy {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
}

interface Projectile {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
}
