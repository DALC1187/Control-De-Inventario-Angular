import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-siniestros',
  templateUrl: './siniestros.component.html',
  styleUrls: ['./siniestros.component.css']
})
export class SiniestrosComponent implements OnInit {
  isMenuCollapsed = true;
  siniestros: any = [];
  constructor(private _router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    if(localStorage.getItem("tokenInventarios") == undefined){
      this._router.navigate(['']);
    }
    let headers = {'headers': {'Authorization': 'Bearer ' + localStorage.getItem('tokenInventarios')}};
    this.httpClient.get("http://143.198.152.228/laravel/public/api/siniestros", headers).subscribe((siniestros:any) => {
      this.siniestros = siniestros;
    })
  }

  cerrarSesion(){
    this.isMenuCollapsed = true;
    localStorage.clear();
  }

}
