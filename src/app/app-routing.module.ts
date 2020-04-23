import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home/pizza-detail/:id',
    loadChildren: () => import('./pages/pizza-detail/pizza-detail.module').then( m => m.PizzaDetailPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'admin-profil',
    loadChildren: () => import('./pages/admin-profil/admin-profil.module').then( m => m.AdminProfilPageModule)
  },  {
    path: 'edit-ingredient',
    loadChildren: () => import('./pages/admin-profil/edit-ingredient/edit-ingredient.module').then( m => m.EditIngredientPageModule)
  },
  {
    path: 'edit-pizza',
    loadChildren: () => import('./pages/admin-profil/edit-pizza/edit-pizza.module').then( m => m.EditPizzaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
