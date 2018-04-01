import { FiltraPorTitulo } from './filtraPorTitulo.pipe';
import { CardComponent } from './card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CardComponent, FiltraPorTitulo],
  declarations: [CardComponent, FiltraPorTitulo]
})
export class CardModule { }
