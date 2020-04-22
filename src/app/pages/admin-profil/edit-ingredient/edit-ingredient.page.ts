import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-edit-ingredient',
  templateUrl: './edit-ingredient.page.html',
  styleUrls: ['./edit-ingredient.page.scss'],
})
export class EditIngredientPage implements OnInit {

  ingredient: any;

  editForm: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private ingredientService: IngredientService) { }

  ngOnInit() {
    const ingredientId = localStorage.getItem('ingredientId');

    console.log(ingredientId);

    if (!ingredientId) {
      alert('Il y a un problème');
      this.router.navigate(['/admin-profil/add-ingredient']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      nom: ['', Validators.required]
    });

    this.ingredientService.getIngredientById(ingredientId).subscribe(data => {
      console.log(data);
      this.editForm.patchValue(data);
      console.log(ingredientId);
    });
  }

  get f() {
    return this.editForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.ingredientService.updateIngredient(this.editForm.value)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['/admin-profil/add-ingredient']).then(() => {
              window.location.reload();
          },
          err => {
            console.log(err);
          });
        });
    }
  }

}
