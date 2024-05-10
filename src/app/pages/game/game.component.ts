import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SimpleMathComponent } from '../../components/simple-math/simple-math.component';
import { TimerComponent } from "../../components/timer/timer.component";
import { TypingGameComponent } from "../../components/typing-game/typing-game.component";
import { ActivatedRoute } from '@angular/router';
import { LearnClockComponent } from "../../components/learn-clock/learn-clock.component";

@Component({
    selector: 'app-game',
    standalone: true,
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss',
    imports: [CommonModule, SimpleMathComponent, TimerComponent, TypingGameComponent, LearnClockComponent]
})
export class GameComponent {
    gameType: string = "";;

    constructor(private route: ActivatedRoute) {}
  
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.gameType = params['type'];
      });
    }
}
