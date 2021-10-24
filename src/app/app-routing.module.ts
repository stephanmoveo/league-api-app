import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllLeaguesComponent } from './all-leagues/all-leagues.component'

const routes: Routes = [
  { path: 'Premier League', component: AllLeaguesComponent },
  { path: 'Bundesliga', component: AllLeaguesComponent },
  { path: 'Ligue 1', component: AllLeaguesComponent },
  { path: 'Serie A', component: AllLeaguesComponent },
  { path: 'La Liga', component: AllLeaguesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
