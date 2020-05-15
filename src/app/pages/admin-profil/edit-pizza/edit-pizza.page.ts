import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.page.html',
  styleUrls: ['./edit-pizza.page.scss'],
})
export class EditPizzaPage implements OnInit {

  pizza: any;

  editForm: FormGroup;

  submitted = false;

  image: any = '';

  ingredient: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pizzaService: PizzaService,
    private camera: Camera,
    private ingredientService: IngredientService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    const pizzaId = localStorage.getItem('pizzaId');

    this.getIngredient();

    if (!pizzaId) {
      alert('Il y a un problème');
      this.router.navigate(['/admin-profil/add-pizza']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      photo: ['' ],
      nom: ['', Validators.required],
      ingredients: [ [] ],
      prix: [ , Validators.required]
    });

    this.pizzaService.getPizzaById(pizzaId).subscribe(
      data => {
        console.log(data);
        this.editForm.patchValue(data);
        this.pizza = data;
      }
    );
  }

  get f() {
    return this.editForm.controls;
  }

  getIngredient(): void {
    this.ingredientService.getAllIngredient()
    .subscribe(res => {
      this.ingredient = res;
      console.log(res);
    });
  }

  async alertEn() {
    const alert = await this.alertCtrl.create({
      header: 'Chargement en cours',
      message: 'Veuillez patienter'
    });
    alert.present();
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.editForm.value);
    console.log(this.editForm.valid);
    if (this.editForm.valid) {
      this.pizzaService.updatePizza(this.editForm.value)
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

  toggleIn(event: any, i: any) {
    // console.log(event);
    if (event.detail.checked) {
      this.editForm.controls.ingredients.value.push(i.id);
    } else {
      this.editForm.controls.ingredients.value.splice(this.editForm.controls.ingredients.value.indexOf(i.id), 1);
    }
    // console.log(this.addForm.controls.ingredients.value);
  }

  openCam() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      this.editForm.controls.photo.setValue(`data:image/jpeg;base64,${imageData}`);
      this.image = this.editForm.controls.photo.setValue(`data:image/jpeg;base64,${imageData}`);
    }, (err) => {
      alert('Error' + JSON.stringify(err));
    });
  }

}
