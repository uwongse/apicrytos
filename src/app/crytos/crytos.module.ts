import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrytoslistComponent } from './crytoslist/crytoslist.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from 'src/shared/material.module';




@NgModule({
  declarations: [
    CrytoslistComponent,HeaderComponent,
    FooterComponent,CoinDetailComponent,
    FiltroPipe
  
    
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,MaterialModule, AppRoutingModule,
    
    
    
  ],
  exports:[
    CrytoslistComponent,HeaderComponent,
    FooterComponent,CoinDetailComponent
  ]

})
export class CrytosModule { }
