import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailComponent } from './crytos/coin-detail/coin-detail.component';
import { CrytoslistComponent } from './crytos/crytoslist/crytoslist.component';

const routes: Routes = [
  {path: 'home', component:CrytoslistComponent},
  {path: 'coinDetail/:symbolcoin', component: CoinDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
