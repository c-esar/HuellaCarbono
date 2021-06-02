import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { Persona } from '../../bean/usuario';
import { TipoDocumento } from '../../bean/tipoDocumento';
import { ListadosService } from 'src/app/servicios/listados.service';
import { TipoSectorEmpresarial } from 'src/app/bean/TipoSectorEmpresarial';
import { CrearPersonaService } from 'src/app/servicios/crear-persona.service';
//https://reviblog.net/2020/07/03/tutorial-de-ionic-formularios-reactivos/
@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.page.html',
  styleUrls: ['./registro-usuarios.page.scss'],
})
export class RegistroUsuariosPage implements OnInit {

  public usuario: Persona;
  tipoDocumentos: TipoDocumento[];
  tipoSectorEmpresariales: any[];

  constructor(
    private authService: AuthService,
    private _listado: ListadosService,
    private _crearPersona: CrearPersonaService,
    private router: Router) {
    this.usuario = new Persona();
  }

  ngOnInit() {
    this.obtenerTipoDocumento();
    this.obtenerTipoSectorEmpresarial();
  }

  registroUsuario() {
    debugger
    this._crearPersona.registroUsuarios(this.usuario.correo, this.usuario.pass).then((res: any)=> {
      debugger
      this.usuario.idInicio = res.user.uid;
      this._crearPersona.agregarPersona(this.usuario).then(res => {
        this.router.navigate(['/principal']);
      }).catch(err => console.log(err));
    });
  }

  obtenerTipoDocumento() {
    this._listado.obtenerTipoDocumento().subscribe(data => this.tipoDocumentos = data);
  }

  obtenerTipoSectorEmpresarial() {
    this._listado.obtenerTipoSectorEmpresarial().subscribe(data => this.tipoSectorEmpresariales = data);
  }
}
