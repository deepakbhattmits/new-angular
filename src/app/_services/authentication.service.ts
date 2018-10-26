import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost/api/auth/selectone.php', { username: username, password: password })
            .map(user => {
              // console.log("AUTH SERVICES 1 : ",user);
                // login successful if there's a jwt token in the response
                if (user) {
                // if (user && user.token) {
                  // console.log("AUTH SERVICES 2 : ",user);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
