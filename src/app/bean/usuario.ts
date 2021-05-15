import { TipoDocumento } from './tipoDocumento';
export class Persona {
  seqPersona: number;
  nomNombreCompleto: string;
  tipoDocumento: TipoDocumento;
  numeroDocumento: string;
  fechaNacimiento: Date;
  correo: string;
  nomEmpresa:string;
  pass:string;
  fechaCreacion: Date;
  
  constructor() {
    this.seqPersona = null;
    this.nomNombreCompleto = null
    this.numeroDocumento = null;
    this.fechaNacimiento = null;
    this.correo = null;
    this.pass = null;
    this.fechaCreacion = new Date();
    this.tipoDocumento = new TipoDocumento();
    this.nomEmpresa = null;
  }
}