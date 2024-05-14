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
  settings: string[] = ['E3', 'UV', 'A4','lI', 'B8'];
  selectedSetting: string = '';
  settingA: string = '';
  settingB: string = '';

  constructor() {
    this.selectSetting('??');
  }

  generateGrid(): void {
    this.grid = Array.from({ length: this.gridSize }, () => Array(this.gridSize).fill(this.settingA));
    this.uniqueSymbolRow = Math.floor(Math.random() * this.gridSize);
    this.uniqueSymbolColumn = Math.floor(Math.random() * this.gridSize);
    this.grid[this.uniqueSymbolRow][this.uniqueSymbolColumn] = this.settingB;
  }

  selectSetting(input: string): void { 
    this.selectedSetting = input[0] + input[1];
    if(input == '??'){
      input = this.getRandomSetting();
    }
      this.settingA = input[0];
      this.settingB = input[1];
    this.generateGrid();
  }

  getRandomSetting(): string {
    const randomIndex = Math.floor(Math.random() * this.settings.length);
    return this.settings[randomIndex];
  }
  
  selectSymbol(row: number, column: number): void {
    if (row === this.uniqueSymbolRow && column === this.uniqueSymbolColumn) {
      this.score++;
      this.selectSetting(this.selectedSetting);
    }
  }
}