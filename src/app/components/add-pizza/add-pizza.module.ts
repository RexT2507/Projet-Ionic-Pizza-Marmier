import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddPizzaComponent } from './add-pizza.component';



@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [AddPizzaComponent],
    exports: [AddPizzaComponent]
})
export class AddPizzaComponentModule {}
