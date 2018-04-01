import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})
export class FotoComponent {
    _id: string;
    @Input() url: string;
    @Input() titulo: string;
    @Input() descricao = 'Descrição não informada';
}
