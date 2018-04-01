import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FotoService {


    URL = 'http://localhost:3000/v1/fotos';
    cabecalho: HttpHeaders;

    constructor(private httpClient: HttpClient) {
        this.cabecalho = new HttpHeaders({ 'Content-Type': 'application/json' });
    }

    listar(): Observable<any> {
        return this
            .httpClient
            .get(this.URL, { observe: 'response' });
    }

    salvar(foto: any): Observable<any> {

        console.log('salvando', foto);
        return this.httpClient.post(this.URL,
            JSON.stringify(foto),
            {
                headers: this.cabecalho
            });
    }

    remove(idFoto: string): Observable<any> {
        return this.httpClient.delete(`${this.URL}/${idFoto}`, { observe: 'response' });
    }

    getFotoComID(idFoto: string): Observable<any> {
        return this.httpClient.get(`${this.URL}/${idFoto}`, { observe: 'response' });
    }

    alterar(id: string, foto: any): Observable<any> {
        console.log('salvando', foto);
        return this.httpClient.put(`${this.URL}/${id}`,
            JSON.stringify(foto),
            {
                headers: this.cabecalho
            });
    }
}
