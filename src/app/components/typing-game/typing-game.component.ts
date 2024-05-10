import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WordsService } from './words.service';

@Component({
  selector: 'app-typing-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './typing-game.component.html',
  styleUrl: './typing-game.component.scss'
})
export class TypingGameComponent {
  currentWord: string = "";
  wordPosition: number = 300;
  barrierPosition: number = 100;
  userInput: string = "";
  score: number = 0;
  words: string[] = ['hello', 'world', 'angular', 'typing', 'game'];

  constructor(private wordsService: WordsService) { }

  ngOnInit(): void {
    this.currentWord = this.wordsService.getRandomWord();
    this.wordPosition = 300;
    this.barrierPosition = 100;
    this.score = 0;
  }

  checkInput(): void {
    if (this.userInput === this.currentWord) {
      this.score++;
      this.userInput = '';
      this.currentWord = this.wordsService.getRandomWord();
      this.wordPosition = 300;
    }
  }

  moveWord(): void {
    this.wordPosition -= 2; 
    if (this.wordPosition <= this.barrierPosition) {
      this.score = 0;
      this.wordPosition = 300;
      this.currentWord = this.wordsService.getRandomWord();
    }
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.moveWord();
    }, 50);
  }
}
