import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { TypingGameComponent } from './components/typing-game/typing-game.component';

export const routes: Routes = [  
    {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'game',
    component: GameComponent,
    title: 'game',
  },
  {
  path: 'test',
  component: TypingGameComponent,
  title: 'text',
  },
];