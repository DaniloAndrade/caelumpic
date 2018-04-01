import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  @Input() nome = 'OK';
  @Input() estilo = 'btn-default';
  @Input() tipo = 'button';
  @Input() desabilitado = false;
  @Input() confirmacao = false;
  @Output() acao = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  executaAcao() {
    if (this.confirmacao) {
      if (confirm('Tem certeza?')) {
        this.acao.emit(null);
      }
      return;
    }
    this.acao.emit(null);
  }

}
