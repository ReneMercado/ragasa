import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TareasService {

    URL_SERVICIOS = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    public getTareas() {
        return this.http.get('get-data-request');
    }

    async getTarea() {
        try {
          const url = this.URL_SERVICIOS + '/tareas';
    
          return await this.http.get(url)
            .map((resp: any) => {
              return resp;
            }).toPromise();
        } catch (e) {
          throw e;
        } 
      }
}

