import { BotaoModule } from './components/botao/botao.module';
import { FiltraPorTitulo } from './components/card/filtraPorTitulo.pipe';
import { CardModule } from './components/card/card.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FotoModule } from './components/foto/foto.module';
import { TituloModule } from './components/titulo/titulo.module';
import { CardComponent } from './components/card/card.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

import { roteamento } from './app.router';
import { RouterOutlet } from '@angular/router';
import { Page404Component } from './pages/page404/page404.component';

import { FotoService } from './service/Foto.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotaoComponent } from './components/botao/botao.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FotoModule,
    CardModule,
    BotaoModule,
    TituloModule,
    HttpClientModule,
    roteamento
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
