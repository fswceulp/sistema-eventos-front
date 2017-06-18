import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser')).length > 0) {
            // Somente usuários logado
            return true;
        }

        // se não tiver logado, direciona para login
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}