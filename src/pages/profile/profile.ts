import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { AlunoDTO } from '../../models/aluno.dto';
import { AlunoService } from '../../services/domain/aluno.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  aluno : AlunoDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService,
    public alunoService: AlunoService) {
  }

  /* ao carregar busca informações do aluno logado */
  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.alunoService.findByEmail(localUser.email)
        .subscribe(response => {
          this.aluno = response;
        },
        error => {})
    }
  }
}