import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { IngredientService } from 'src/app/services/ingredient.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.scss'],
})
export class AddPizzaComponent implements OnInit {

  addForm: FormGroup;

  submitted = false;

  pizza: any = [];

  tbodyLife = true;

  tbodyLifeIng = true;

  ingredient: any = [];

  image: any = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private camera: Camera,
    private pizzaService: PizzaService,
    private ingredientService: IngredientService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.getPizza();
    this.getIngredient();
    this.addForm = this.formBuilder.group({
      id: [],
      photo: [''],
      nom: ['', Validators.required],
      ingredients: [ [] ],
      prix: [ , Validators.required]
    });
  }

  openCam() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      this.addForm.controls.photo.setValue(`data:image/jpeg;base64,${imageData}`);
    }, (err) => {
      alert('Error' + JSON.stringify(err));
    });
  }

  getPizza(): void {
    this.pizzaService.getAllPizza()
    .subscribe(res => {
      this.pizza = res;
      console.log(this.pizza);
    });
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
    console.log(this.addForm.value);
    console.log(this.addForm.valid);
    if (this.addForm.valid) {
      this.alertEn();
      this.pizzaService.addPizza(this.addForm.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['']).then(() => {
          window.location.reload();
        });
      });
    }
  }

  deletePizza(p: any) {
    this.pizzaService.deletePizza(p.id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/admin-profil/add-pizza']).then(() => {
          window.location.reload();
        });
      }
    );
  }


  toggleIn(event: any, i: any) {
    // console.log(event);
    if (event.detail.checked) {
      this.addForm.controls.ingredients.value.push(i.id);
    } else {
      this.addForm.controls.ingredients.value.splice(this.addForm.controls.ingredients.value.indexOf(i.id), 1);
    }
    // console.log(this.addForm.controls.ingredients.value);
  }

  updatePizza(p: any) {
    localStorage.removeItem('pizzaId');
    localStorage.setItem('pizzaId', p.id);
    this.router.navigate(['edit-pizza']);
  }

  get f() {
    return this.addForm.controls;
  }

  hide() {
    const x = document.getElementById('addPizza');
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

  hidenIngredient() {
    const x = document.getElementById('tbodyIn');
    if (x.style.display === 'none') {
      x.removeAttribute('style');
      this.tbodyLifeIng = false;
    } else {
      x.style.display = 'none';
      this.tbodyLifeIng = true;
    }
  }
}
