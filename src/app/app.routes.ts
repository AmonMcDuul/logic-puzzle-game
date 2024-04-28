import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { SimpleMathComponent } from './components/simple-math/simple-math.component';

export const routes: Routes = [  
    {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'game',
    component: GameComponent,
    title: 'Game',
  },
  {
  path: 'test',
  component: SimpleMathComponent,
  title: 'text',
  },
];