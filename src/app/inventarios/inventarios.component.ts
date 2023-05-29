import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.component.html',
  styleUrls: ['./inventarios.component.css']
})
export class InventariosComponent implements OnInit {
  isMenuCollapsed = true;
  inventarios : any = [];
  constructor(private _router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    if(localStorage.getItem("tokenInventarios") == undefined){
      this._router.navigate(['']);
    }

    let headers = {'headers': {'Authorization': 'Bearer ' + localStorage.getItem('tokenInventarios')}};
    this.httpClient.get("http://143.198.152.228/laravel/public/api/inventarios", headers).subscribe((inventarios:any) => {
      this.inventarios = inventarios;
    })
  }

  cerrarSesion(){
    this.isMenuCollapsed = true;
    localStorage.clear();
  }

  pdf(inventarioID:any){
     window.location.href = "http://143.198.152.228/laravel/public/api/inventarios/PDF/"+inventarioID+"?token="+localStorage.getItem('tokenInventarios')
  }

}
