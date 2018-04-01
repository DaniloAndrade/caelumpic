import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';
import { FotoService } from '../../service/Foto.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title: String = 'Caelumpic';
  fotos: FotoComponent[] = [];
  mensagem = '';

  constructor(private fotoService: FotoService) {
    console.log('construtor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.fotoService.listar()
      .subscribe((response: HttpResponse<FotoComponent[]>) => {
        console.log('Retornou', response);
        this.fotos = response.body;
      });
  }

  remover(idFotoParaRemover: string) {
    console.log('Opa, vamos remover a foto ', idFotoParaRemover);

    this.fotoService.remove(idFotoParaRemover).subscribe((response: HttpResponse<any>) => {
      console.log('resposta', response);
      this.fotos = this.fotos.filter(foto => foto._id !== idFotoParaRemover);
      this.mensagem = 'Foto removida';
    });
  }

}
