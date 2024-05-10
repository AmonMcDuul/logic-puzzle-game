import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
  currentWord: string = '';
  wordPosition: number = 300;
  barrierPosition: number = 0;
  userInput: string = '';
  score: number = 0;
  highscore: number = 0;
  currentLetterIndex: number = 0;

  constructor(private wordsService: WordsService) {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.currentWord = this.wordsService.getRandomWord();
    this.wordPosition = 400;
    this.barrierPosition = 0;
    this.currentLetterIndex = 0;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    const keyPressed = event.key;
    const currentLetter = this.currentWord[this.currentLetterIndex];
    if (keyPressed === currentLetter) {
      this.currentLetterIndex++;
      if (this.currentLetterIndex >= this.currentWord.length) {
        this.score++;
        if(this.score > this.highscore){
          this.highscore = this.score;
        }
        this.newGame();
      }
    }
  }

  moveWord(): void {
    this.wordPosition -= 2; 
    if (this.wordPosition <= this.barrierPosition) {
      this.score = 0;
      this.currentLetterIndex = 0;
      this.newGame();
    }
  }

  isLetterGuessed(index: number): boolean {
    return index < this.currentLetterIndex;
  }

  get currentWordArray(): string[] {
    return Array.from(this.currentWord);
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.moveWord();
    }, 50);
  }
}