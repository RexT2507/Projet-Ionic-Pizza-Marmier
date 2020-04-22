import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditIngredientPage } from './edit-ingredient.page';
import { RouterModule } from '@angular/router';
import { FooterComponentModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FooterComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditIngredientPage
      }
    ])
  ],
  declarations: [EditIngredientPage]
})
export class EditIngredientPageModule {}
