import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminProfilPage } from './admin-profil.page';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponentModule } from 'src/app/components/footer/footer.module';

describe('AdminProfilPage', () => {
  let component: AdminProfilPage;
  let fixture: ComponentFixture<AdminProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfilPage ],
      imports: [
        IonicModule.forRoot(),
        FooterComponentModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
