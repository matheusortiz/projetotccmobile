import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";
import { JwtHelper } from 'angular2-jwt';

/* serviço responsavel pela autenticação no back-end */

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper();

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    /* realiza a autenticação no endpoint login do back-end */
    authenticate(creds: CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    /* atualiza o token do usuário já logado na aplicação */
    refreshToken() {
        return this.http.post(
            `${API_CONFIG.baseUrl}/auth/refresh_token`, 
            {},
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    /* login com sucesso, atribui as informações do usuário ao localUser */
    successfullLogin(authorizationValue: string) {
        let tok = authorizationValue.substring(7);
        let user: LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    }

    /* método para sair do sistema anula o localUser */
    logout() {
        this.storage.setLocalUser(null);
    }
}