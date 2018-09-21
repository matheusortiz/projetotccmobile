import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlunoDTO } from "../../models/aluno.dto";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";

/* consome o serviço do endpoint do background */

@Injectable()
export class AlunoService{
    
    constructor(public http: HttpClient, public storage : StorageService){

    }

    /* lista todos os alunos */
    findAll() : Observable<AlunoDTO> {
        return this.http.get<AlunoDTO>(`${API_CONFIG.baseUrl}/alunos/`);
    }


    /* busca aluno por e-mail */
    findByEmail(email: string) : Observable<AlunoDTO>{

        return this.http.get<AlunoDTO>(`${API_CONFIG.baseUrl}/alunos/email?value=${email}`);
    }


}