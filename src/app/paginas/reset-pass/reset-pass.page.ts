import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service'
@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  public email:string="";

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  recuperarContrasena(){
    if(this.email != ""){
      this.authService.recuperarContrasena(this.email).then(() => {
        console.log('Enviado');
      }).catch(() => {
        console.log('No enviado');
      });
      this.email = "";
    }else{
      alert('Falta colocar un correo electrónico');
    }
 
  }
}
