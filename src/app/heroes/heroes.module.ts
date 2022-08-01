import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    imports: [
        CommonModule //sirve para empaquetar mis componente y no cargar otros modulos
    ],                  // common nos brinda directivas de angular
    exports: [
        HeroeComponent //saco al app el que necesito
    ],

})

export class HeroesModule {

}