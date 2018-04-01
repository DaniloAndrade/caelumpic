import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { Page404Component } from './pages/page404/page404.component';


const rotasApp: Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro/:id', component: CadastroComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: '**', component: Page404Component}
];


export const roteamento = RouterModule.forRoot(rotasApp);

