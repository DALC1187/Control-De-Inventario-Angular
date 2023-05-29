import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  message=""
  @ViewChild('staticAlert', { static: false }) staticAlert!: NgbAlert;
  constructor(private f: FormBuilder, private httpClient: HttpClient, private _router: Router) {
    this.formulario = this.f.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.httpClient.post("http://143.198.152.228/laravel/public/api/login?plataforma=web", this.formulario.value).subscribe((apiData:any) => {
        this._router.navigate(['siniestros']);
      localStorage.setItem("tokenInventarios", apiData.token)
    }, error => {
      this.message = "Inicio de sesión no válido."
      setTimeout(() => this.staticAlert.close(), 5000);
    })
  }
}
