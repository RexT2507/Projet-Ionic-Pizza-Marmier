import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddIngredientComponent } from './add-ingredient.component';



@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [AddIngredientComponent],
    exports: [AddIngredientComponent]
})
export class AddIngredientComponentModule {}
