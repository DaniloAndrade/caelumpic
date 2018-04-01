import { FotoComponent } from './../foto/foto.component';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filtraPorTitulo'
})
export class FiltraPorTitulo implements PipeTransform {

    transform(dados: FotoComponent[], entrada: string): any {

        return dados.filter( (foto) => foto.titulo ? foto.titulo.toLowerCase().includes(entrada) : true);
    }
}
