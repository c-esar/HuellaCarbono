import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Persona } from '../bean/usuario';

@Injectable({
  providedIn: 'root'
})
export class CrearPersonaService {

  private todosPersona: AngularFirestoreCollection<Persona>;

  constructor(private AFauth: AngularFireAuth,
    private db: AngularFirestore) {
    this.todosPersona = this.db.collection<Persona>('Persona');
  }

  agregarPersona(usuario: Persona): Promise<any> {
    return this.db.collection('Persona').add({
      nomNombreCompleto: usuario.nomNombreCompleto,
      tipoDocumentostr: usuario.tipoDocumento.seqTipoDocumento,
      tipoSectorstr: usuario.tipoSector.seqTipoSectorEmpresarial,
      numeroDocumento: usuario.numeroDocumento,
      correo: usuario.correo,
      nomEmpresa: usuario.nomEmpresa,
      pass:  usuario.pass,
      fechaCreacion: new Date(),
      idInicio: usuario.idInicio
    });
  }

  actualizarPersona(usuario: Persona) {
    return this.todosPersona.doc(usuario.seqPersona).update(usuario)
  }

  obtenerPersona(id: string) {
    return this.todosPersona.doc<Persona>(id).valueChanges();
  }

  obtenerPersonas(): Observable<any> {
    return this.todosPersona.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const seqPersona = a.payload.doc.id;
          return { seqPersona, ...data };
        })
      }
    ));
  }

  registroUsuarios(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(email, pass).then(res => {
        resolve(res);
      }).catch(err => reject(err))
    });

  }
}
