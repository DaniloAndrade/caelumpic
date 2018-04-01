import { roteamento } from './../../app.router';
import { NgModule } from '@angular/core';
import { TituloComponent } from './titulo.component';
import { RouterModule } from '@angular/router';


// se quiser usar algo externo a um módulo
// Tem que declarar dentro dele
@NgModule({
    imports: [RouterModule],
    declarations: [TituloComponent],
    exports: [TituloComponent]
})
export class TituloModule {

}
