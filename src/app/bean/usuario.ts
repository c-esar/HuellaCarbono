import { TipoDocumento } from './tipoDocumento';
import { TipoSectorEmpresarial } from './TipoSectorEmpresarial';
export class Persona {
  seqPersona: string;
  nomNombreCompleto: string;
  tipoDocumentostr: string;
  tipoSectorstr: string;
  tipoDocumento: TipoDocumento;
  tipoSector: TipoSectorEmpresarial;
  numeroDocumento: string;
  fechaNacimiento: Date;
  correo: string;
  nomEmpresa:string;
  pass:string;
  fechaCreacion: Date;
  idInicio: string;
  
  constructor() {
    this.seqPersona = null;
    this.nomNombreCompleto = null
    this.numeroDocumento = null;
    this.fechaNacimiento = null;
    this.correo = null;
    this.pass = null;
    this.fechaCreacion = new Date();
    this.tipoDocumento = new TipoDocumento();
    this.tipoSector = new TipoSectorEmpresarial();
    this.nomEmpresa = null;
    this.idInicio = null;
  }
}