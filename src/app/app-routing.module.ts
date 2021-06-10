import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  { path: '', redirectTo: '/Contador', pathMatch: 'full' },
  {
    path: 'Contador',
    component: ContadorComponent
  },
  {
    path: 'Game',
    component: GameComponent
  },
  { path: '**', redirectTo: '/Contador', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
