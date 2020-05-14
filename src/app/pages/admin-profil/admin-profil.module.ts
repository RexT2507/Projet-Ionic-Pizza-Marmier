import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminProfilPage } from './admin-profil.page';

import { FooterComponentModule } from 'src/app/components/footer/footer.module';
import { AddPizzaComponentModule } from 'src/app/components/add-pizza/add-pizza.module';

import { AddPizzaComponent } from 'src/app/components/add-pizza/add-pizza.component';
import { AddIngredientComponent } from 'src/app/components/add-ingredient/add-ingredient.component';
import { AddIngredientComponentModule } from 'src/app/components/add-ingredient/add-ingredient.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterComponentModule,
    AddPizzaComponentModule,
    AddIngredientComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminProfilPage,
        children: [
          {
            path: 'add-pizza',
            component: AddPizzaComponent
          },
          {
            path: 'add-ingredient',
            component: AddIngredientComponent
          }
        ]
      }
    ])
  ],
  declarations: [AdminProfilPage]
})
export class AdminProfilPageModule {}
