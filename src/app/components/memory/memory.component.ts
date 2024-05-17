import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-memory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.scss'
})
export class MemoryComponent {
  symbols: string[] = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  cards: { symbol: string, flipped: boolean, matched: boolean }[] = [];
  flippedCards: { symbol: string, index: number }[] = [];
  gridSizeOptions: number[] = [6, 12, 16, 24, 32, 40];
  selectedGridSize: number = 6;

  constructor() {}

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.cards = [];
    this.flippedCards = [];
    const selectedSymbols = this.symbols.slice(0, this.selectedGridSize / 2);
    const gameSymbols = [...selectedSymbols, ...selectedSymbols].sort(() => 0.5 - Math.random());
    this.cards = gameSymbols.map(symbol => ({ symbol, flipped: false, matched: false }));
  }

  flipCard(index: number): void {
    if (this.flippedCards.length < 2 && !this.cards[index].flipped) {
      this.cards[index].flipped = true;
      this.flippedCards.push({ symbol: this.cards[index].symbol, index });

      if (this.flippedCards.length === 2) {
        if (this.flippedCards[0].symbol === this.flippedCards[1].symbol) {
          this.cards[this.flippedCards[0].index].matched = true;
          this.cards[this.flippedCards[1].index].matched = true;
          this.flippedCards = [];
        } else {
          setTimeout(() => {
            this.cards[this.flippedCards[0].index].flipped = false;
            this.cards[this.flippedCards[1].index].flipped = false;
            this.flippedCards = [];
          }, 1000);
        }
      }
    }
  }

  selectGridSize(size: number): void {
    this.selectedGridSize = size;
    this.startGame();
  }
}
