import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.page.html',
  styleUrls: ['./edit-pizza.page.scss'],
})
export class EditPizzaPage implements OnInit {

  pizza: any;

  editForm: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private pizzaService: PizzaService) { }

  ngOnInit() {
    const pizzaId = localStorage.getItem('pizzaId');

    if (!pizzaId) {
      alert('Il y a un problème');
      this.router.navigate(['/admin-profil/add-pizza']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      photo: ['', Validators.required],
      nom: ['', Validators.required],
      ingredient: ['', Validators.required],
      prix: ['', Validators.required]
    });

    this.pizzaService.getPizzaById(pizzaId).subscribe(
      data => {
        console.log(data);
        this.editForm.patchValue(data);
      }
    );
  }

  get f() {
    return this.editForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.pizzaService.getPizzaById(this.editForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/admin-profil/add-pizza']).then(() => {
            window.location.reload();
          });
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
