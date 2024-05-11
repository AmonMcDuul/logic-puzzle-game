import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-letter-finder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './letter-finder.component.html',
  styleUrl: './letter-finder.component.scss'
})
export class LetterFinderComponent {
  gridSize: number = 10;
  grid: string[][] = [];
  uniqueSymbolRow: number = 0;
  uniqueSymbolColumn: number = 0;
  score: number = 0;

  constructor() {
    this.generateGrid();
  }

  generateGrid(): void {
    this.grid = Array.from({ length: this.gridSize }, () => Array(this.gridSize).fill('E'));
    this.uniqueSymbolRow = Math.floor(Math.random() * this.gridSize);
    this.uniqueSymbolColumn = Math.floor(Math.random() * this.gridSize);
    this.grid[this.uniqueSymbolRow][this.uniqueSymbolColumn] = '3';
  }

  selectSymbol(row: number, column: number): void {
    if (row === this.uniqueSymbolRow && column === this.uniqueSymbolColumn) {
      this.score++;
      this.generateGrid();
    }
  }
}