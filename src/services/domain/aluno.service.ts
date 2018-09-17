import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AlunoDTO } from "../../models/aluno.dto";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class AlunoService{
    
    constructor(public http: HttpClient){

    }

    findAll() : Observable<AlunoDTO> {
        return this.http.get<AlunoDTO>(`${API_CONFIG.baseUrl}/alunos/01119076080`);
    }
}