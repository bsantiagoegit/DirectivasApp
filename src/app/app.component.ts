import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "RESGITRO DE USUARIOS";
  msj1 = "";
  msj2 = "";
  register = false;
  name:String = "";
  lastname:String = "";
  listas: object[];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(){
    this.listas=[
      {titulo:"Python cada día más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"Javascript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedo Pascal?"},
    ]
  }

  UserRegister(){
    this.register = true;
    this.msj1 ="El/La suaurio/a";
    this.msj2 ="ha sido registrado/a con éxito";
  }
}
