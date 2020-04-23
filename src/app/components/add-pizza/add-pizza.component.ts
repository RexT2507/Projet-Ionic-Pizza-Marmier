import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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

  image: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private camera: Camera,
    private pizzaService: PizzaService) { }

  ngOnInit() {
    this.getPizza();
    this.addForm = this.formBuilder.group({
      id: [],
      photo: ['', Validators.required],
      nom: ['', Validators.required],
      ingredient: ['', Validators.required],
      prix: ['', Validators.required]
    });
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
      this.addForm.controls.photo.setValue(`data:image/jpeg;base64,${imageData}`);
      this.image = (window as any).Ionic.WebView.convertFileSrc(imageData);
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

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
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

  updatePizza(p: any) {
    localStorage.removeItem('pizzaId');
    localStorage.setItem('pizzaId', p.id);
    this.router.navigate(['']);
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
}
