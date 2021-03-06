import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth'
import { map } from 'rxjs/operators'
import { isNullOrUndefined } from 'util';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private AFauth: AngularFireAuth,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.AFauth.authState.pipe(map(auth => {
      if (auth == null) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    }));

  }

}
