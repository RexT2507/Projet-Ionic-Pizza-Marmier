import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaDetailPage } from './pizza-detail.page';
import { RouterModule } from '@angular/router';
import { FooterComponentModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: PizzaDetailPage
      }
    ])
  ],
  declarations: [PizzaDetailPage]
})
export class PizzaDetailPageModule {}
