import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditPizzaPage } from './edit-pizza.page';

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
        component: EditPizzaPage
      }
    ])
  ],
  declarations: [EditPizzaPage]
})
export class EditPizzaPageModule {}
