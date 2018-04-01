import { Observable } from 'rxjs/Observable';
import { roteamento } from './../../app.router';
import { HttpResponse } from '@angular/common/http';
import { FotoComponent } from './../../components/foto/foto.component';
import { Component, OnInit } from '@angular/core';
import { FotoService } from '../../service/Foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/// https://microsoft.github.io/TypeSearch
@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent;
  formCadastro: FormGroup;
  labelBotao = 'Cadastrar';
  onAcao: any = this.salvar;


  constructor(private fotoService: FotoService,
    private rota: ActivatedRoute, formBuilder: FormBuilder,
    private router: Router) {
    this.foto = new FotoComponent();
    this.foto.descricao = '';
    this.formCadastro = formBuilder.group({
      url: ['', Validators.compose([Validators.required])],
      titulo: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      descricao: ['']
    });
  }

  ngOnInit() {
    this.rota.params.subscribe((params) => {
      const idDaFoto = params.id;
      console.log('Id para edição', idDaFoto);
      if (idDaFoto) {
        this.onAcao = this.alterar;
        this.labelBotao = 'Alterar';
        this.fotoService.getFotoComID(idDaFoto).subscribe((response: HttpResponse<FotoComponent>) => {
          this.foto = response.body;
        });
      }
    });
  }

  getFotoForm(name: string) {
    return this.formCadastro.get(name);
  }

  cadastraFoto(event) {
    event.preventDefault();
    this.onAcao(this.foto);
  }

  alterar(foto: FotoComponent) {
    return this.fotoService.alterar(this.foto._id, this.foto).subscribe(
      (data) => {
        console.log(data);
        this.foto = new FotoComponent();
        this.foto.descricao = '';
        this.router.navigate(['/']);
      },
      (error) => console.log(error)
    );
  }

  salvar(foto: FotoComponent) {
    this.fotoService.salvar(this.foto).subscribe(
      (data) => {
        console.log(data);
        this.foto = new FotoComponent();
        this.foto.descricao = '';
      },
      (error) => console.log(error)
    );
  }

}
