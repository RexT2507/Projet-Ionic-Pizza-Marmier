import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddIngredientComponent } from './add-ingredient.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule
    ],
    declarations: [AddIngredientComponent],
    exports: [AddIngredientComponent]
})
export class AddIngredientComponentModule {}
