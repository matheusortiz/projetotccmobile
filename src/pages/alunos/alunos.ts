import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunoService } from '../../services/domain/aluno.service';
import { AlunoDTO } from '../../models/aluno.dto';

@IonicPage()
@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html',
})
export class AlunosPage {


  items: AlunoDTO;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alunoService: AlunoService) {
  }

  ionViewDidLoad() {
    this.alunoService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {});
  }

}
