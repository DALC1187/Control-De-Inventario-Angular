import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ajusteinventario',
  templateUrl: './ajusteinventario.component.html',
  styleUrls: ['./ajusteinventario.component.css']
})
export class AjusteinventarioComponent implements OnInit {
  isMenuCollapsed = true;
  inventario:any=null;
  articulos:any=null;
  constructor(private _router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    if(localStorage.getItem("tokenInventarios") == undefined){
      this._router.navigate(['']);
    }
    let headers = {'headers': {'Authorization': 'Bearer ' + localStorage.getItem('tokenInventarios')}};
    this.httpClient.get("http://143.198.152.228/laravel/public/api/ajusteDeInventario", headers).subscribe((inventario:any) => {
      this.inventario = inventario;
      this.articulos=inventario.articulos;
    })
  }







  cerrarSesion(){
    this.isMenuCollapsed = true;
    localStorage.clear();
  }


  soloNumeros(event:any){
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105)) {
      return false;
    }
    return true;
  }
  cambiarCantidad(event:any, articuloID:any){
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105)) {
      return false;
    }
    for (var d = 0, len = this.articulos.length; d < len; d += 1) {
      if (this.articulos[d].id === articuloID) {
        this.articulos[d].cantidad = Number(event.target.value);
      }
    }
    return true;
  }
  ajustar(){
    let headers = {'headers': {'Authorization': 'Bearer ' + localStorage.getItem('tokenInventarios')}};
    this.httpClient.post("http://143.198.152.228/laravel/public/api/actualizarInventario", {articulos: this.articulos, inventarioID: this.inventario.id} ,headers).subscribe((inventario:any) => {
      this._router.navigate(['inventarios']);
    })
  }
}
