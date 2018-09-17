import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunoService } from '../../services/domain/aluno.service';

@IonicPage()
@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html',
})
export class AlunosPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alunoService: AlunoService) {
  }

  ionViewDidLoad() {
    this.alunoService.findAll()
      .subscribe(response => {
        console.log(response);
      },
        error => {
          console.log(error);
        });
  }

}
