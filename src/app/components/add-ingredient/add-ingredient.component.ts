import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private ingredientService: IngredientService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nom: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.ingredientService.addIngredient(this.addForm.value)
        .subscribe( data => {
          console.log(data);
          this.router.navigate(['home']).then(() => {
            window.location.reload();
          });
        });
    }
  }

  get f() {
    return this.addForm.controls;
  }
}
