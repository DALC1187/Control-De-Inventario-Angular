import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SiniestrosComponent} from "./siniestros/siniestros.component";
import {InventariosComponent} from "./inventarios/inventarios.component";
import {AjusteinventarioComponent} from "./ajusteinventario/ajusteinventario.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'siniestros',
    component: SiniestrosComponent,
  },
  {
    path: 'inventarios',
    component: InventariosComponent,
  },
  {
    path: 'ajusteinventario',
    component: AjusteinventarioComponent,
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
