import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokedexListPageRoutingModule } from './pokedex-list-routing.module';

import { PokedexListPage } from './pokedex-list.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PokedexListPageRoutingModule,
        NgOptimizedImage
    ],
  declarations: [PokedexListPage]
})
export class PokedexListPageModule {}
