import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlunoDTO } from "../../models/aluno.dto";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";

@Injectable()
export class AlunoService{
    
    constructor(public http: HttpClient, public storage : StorageService){

    }

    findAll() : Observable<AlunoDTO> {
        return this.http.get<AlunoDTO>(`${API_CONFIG.baseUrl}/alunos/`);
    }

    findByEmail(email: string) : Observable<AlunoDTO>{

        return this.http.get<AlunoDTO>(`${API_CONFIG.baseUrl}/alunos/email?value=${email}`);
    }


}