import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'pokedex-list',
    loadChildren: () => import('./pages/pokedex-list/pokedex-list.module').then(m => m.PokedexListPageModule)
  },
  {
    path: 'pokemon-details',
    loadChildren: () => import('./pages/pokemon-details/pokemon-details.module').then(m => m.PokemonDetailsPageModule)
  },
  {
    path: 'pokemon-details/:id',
    loadChildren: () => import('./pages/pokemon-details/pokemon-details.module').then(m => m.PokemonDetailsPageModule)
  },
  {
    path: 'pokemon-details/:id/:name',
    loadChildren: () => import('./pages/pokemon-details/pokemon-details.module').then(m => m.PokemonDetailsPageModule)
  },
  {
    path: '',
    redirectTo: 'pokedex-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'pokedex-list'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
