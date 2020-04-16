import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminProfilPage } from './admin-profil.page';

describe('AdminProfilPage', () => {
  let component: AdminProfilPage;
  let fixture: ComponentFixture<AdminProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
