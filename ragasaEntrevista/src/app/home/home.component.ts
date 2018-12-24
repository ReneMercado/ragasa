import { Component, OnInit } from "@angular/core";
import { ItemEventData, ListView } from "tns-core-modules/ui/list-view";
import { TareasService } from "~/app/services/tareas.service";

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  data = [];
  tarea = {
    _id: "",
    nombre: "",
    descripcion: "",
    estatus: 1
  };

  constructor(public _tareasService: TareasService) {
    // Use the component constructor to inject providers.
  }

  async ngOnInit() {
    // let test = (await this._tareasService.getTarea()).tareas;

    // this.data.push({
    //   _id: "123dasd124",
    //   nombre: "Tarea 1",
    //   descripcion: "Tarea test",
    //   Estatus: 1,
    //   src:
    //     "https://cdn3.iconfinder.com/data/icons/school-solid-icons-vol-1/96/003-512.png"
    // });

    this._tareasService.getTareas().subscribe((resp: any) => {
      this.data = resp.tareas;
    });
  }

  onCreateTarea(tarea: any) {
    this._tareasService.createTarea(tarea).subscribe((resp: any) => {
      let tareaCreated = resp.tarea;
    });
  }

  onDeleteTarea(tarea: any) {
    this._tareasService.deleteTarea(tarea).subscribe((resp: any) => {
      let tareaCreated = resp.tarea;
    });
  }

  onItemTap(args) {
    console.log("You tapped: " + this.data[args.index].nombre);
  }
}
