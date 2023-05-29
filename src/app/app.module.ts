import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SiniestrosComponent } from './siniestros/siniestros.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InventariosComponent } from './inventarios/inventarios.component';
import { AjusteinventarioComponent } from './ajusteinventario/ajusteinventario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiniestrosComponent,
    InventariosComponent,
    AjusteinventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
