import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { MatchComponent } from '../games/match/match.component'
import { RoundComponent } from '../games/round/round.component'
import { CecbankComponent } from '../cecbank/cecbank.component'

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, MatchComponent, RoundComponent, CecbankComponent]
})
export class HomePageModule {}
