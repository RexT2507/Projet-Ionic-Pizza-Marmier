import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.page.html',
  styleUrls: ['./edit-pizza.page.scss'],
})
export class EditPizzaPage implements OnInit {

  pizza: any;

  editForm: FormGroup;

  submitted = false;
  image: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private pizzaService: PizzaService, private camera: Camera) { }

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
        this.pizza = data;
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
