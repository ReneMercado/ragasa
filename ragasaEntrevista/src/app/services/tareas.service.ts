import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class TareasService {
  URL_SERVICIOS = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  public getTareas() {
    const url = this.URL_SERVICIOS + "/tareas";
    return this.http.get(url).map((resp: any) => {
      resp.tareas;
    });
  }

  public deleteTarea(tarea: any) {
    const url = this.URL_SERVICIOS + `/tareas/${tarea._id}`;
    return this.http.delete(url).map((resp: any) => {
      resp.tarea;
    });
  }

  public updateTarea(tarea: any) {
    const url = this.URL_SERVICIOS + `/tareas/${tarea._id}`;
    return this.http.delete(url, tarea).map((resp: any) => {
      resp.tarea;
    });
  }

  public createTarea(tarea: any) {
    const url = this.URL_SERVICIOS + "/tareas";
    return this.http.post(url, tarea).map((resp: any) => {
      resp.tarea;
    });
  }

  async getTarea() {
    try {
      const url = this.URL_SERVICIOS + "/tareas";

      return await this.http
        .get(url)
        .map((resp: any) => {
          return resp;
        })
        .toPromise();
    } catch (e) {
      throw e;
    }
  }
}
