import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../servicios/auth.service';
import { Router} from '@angular/router';
import { Persona} from '../../bean/usuario';
@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.page.html',
  styleUrls: ['./registro-usuarios.page.scss'],
})
export class RegistroUsuariosPage implements OnInit {

  public usuario: Persona;
  constructor(
    private authService: AuthService,
    private router: Router) { 
      this.usuario = new Persona();
    }

  ngOnInit() {
  }

  registroUsuario(){
    this.authService.registroUsuarios(this.usuario.correo,this.usuario.pass).then(res =>{
      this.router.navigate(['/principal']);
      console.log(res);
    }).catch(err => console.log(err));
  }
}
