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

  addForm: FormGroup;
  submitted = false;

  ingredient: any = [];

  tbodyLife = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private ingredientService: IngredientService) { }

  ngOnInit() {
    this.getIngredient();
    this.addForm = this.formBuilder.group({
      id: [],
      nom: ['', Validators.required]
    });
  }

  getIngredient(): void {
    this.ingredientService.getAllIngredient()
    .subscribe(res => {
      this.ingredient = res;
      // console.log(res);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.ingredientService.addIngredient(this.addForm.value)
        .subscribe( data => {
          console.log(data);
          this.router.navigate(['/admin-profil/add-ingredient']).then(() => {
            window.location.reload();
          });
        });
    }
  }

  deleteIngredient(i: any) {
    this.ingredientService.deleteIngredient(i.id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/admin-profil/add-ingredient']).then(() => {
          window.location.reload();
        });
      }
    );
  }

  updateIngredient(i: any) {
    localStorage.removeItem('ingredientId');
    localStorage.setItem('ingredientId', i.id);
    this.router.navigate(['edit-ingredient']);
  }



  hide() {
    const x = document.getElementById('addIng');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

  hiden() {
    const x = document.getElementById('tbody');
    if (x.style.display === 'none') {
      x.removeAttribute('style');
      this.tbodyLife = false;
    } else {
      x.style.display = 'none';
      this.tbodyLife = true;
    }
  }
}
