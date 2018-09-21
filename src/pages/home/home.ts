import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    creds: CredenciaisDTO = {
        email: "",
        senha: ""
    };

    constructor(
        public navCtrl: NavController,
        public menu: MenuController,
        public auth: AuthService) {
    }

    /* desabilita o menu swipe na tela de login */
    ionViewWillEnter() {
        this.menu.swipeEnable(false);
    }

    /* reabilita o menu swipe na tela inicial */
    ionViewDidLeave() {
        this.menu.swipeEnable(true);
    }


    ionViewDidEnter() {
        this.auth.refreshToken()
          .subscribe(response => {
            this.auth.successfullLogin(response.headers.get('Authorization'));
            this.navCtrl.setRoot('ProfilePage');
          },
          error => {});  
      }

    /* realiza o login e direciona para a ágina de profile */
    login() {
        this.auth.authenticate(this.creds)
            .subscribe(response => {
                this.auth.successfullLogin(response.headers.get('Authorization'));
                this.navCtrl.setRoot('ProfilePage');
            },
                error => { });
    }

}
