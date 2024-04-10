import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexListPage } from './pokedex-list.page';

const routes: Routes = [
  {
    path: '',
    component: PokedexListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokedexListPageRoutingModule {}
