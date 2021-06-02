import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TipoDocumento } from '../bean/tipoDocumento';
import { map } from 'rxjs/operators';
import { TipoSectorEmpresarial } from '../bean/TipoSectorEmpresarial';
@Injectable({
  providedIn: 'root'
})
export class ListadosService {

  private todosTipoDocumento: AngularFirestoreCollection<TipoDocumento>;
  private todosTipoSector: AngularFirestoreCollection<TipoSectorEmpresarial>;

  constructor(
    private AFauth: AngularFirestore,
    private router: Router) {
    this.todosTipoDocumento = this.AFauth.collection<TipoDocumento>('TipoDocumento');
    this.todosTipoSector = this.AFauth.collection<TipoSectorEmpresarial>('TipoSectorEmpresarial');
  }

  obtenerTipoDocumento(): Observable<any> {
    return this.todosTipoDocumento.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const seqTipoDocumento = a.payload.doc.id;
          return { seqTipoDocumento, ...data };
        })
      }
    ));
  }

  obtenerTipoSectorEmpresarial(): Observable<any> {
    return this.todosTipoSector.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const seqTipoSectorEmpresarial = a.payload.doc.id;
          return { seqTipoSectorEmpresarial, ...data };
        })
      }
    ));
  }
}
