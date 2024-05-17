import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { LetterFinderComponent } from './components/letter-finder/letter-finder.component';
import { MemoryComponent } from './components/memory/memory.component';

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
  component: MemoryComponent,
  title: 'text',
  },
];