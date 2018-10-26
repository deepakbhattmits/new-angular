import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('http://localhost/a2rewlgn/api/auth/select.php');
    }

    getById(id: number) {
        // return this.http.get('http://localhost/a2rewlgn/api/auth/selectone.php/'+ id );
        return this.http.post('http://localhost/a2rewlgn/api/auth/selectone.php/',{'id':id});
    }

    create(user: User) {
        return this.http.post('http://localhost/a2rewlgn/api/auth/register.php', user, { responseType: 'text' } );
    }

    update(user: User) {
        //return this.http.put('http://localhost/a2rewlgn/api/auth/update.php/',{'id':id}, { responseType: 'text' } );
        return this.http.post("http://localhost/a2rewlgn/api/auth/update.php/", user).map(()=>"");
    }

    delete(id: number) {
      // console.log("want delete this : ",id);
      //return this.http.delete('http://localhost/a2rewlgn/api/auth/delete.php/' + id, { responseType: 'text' } );
        return this.http.post("http://localhost/a2rewlgn/api/auth/delete.php/",{'id':id}).map(()=>this.getAll());
    }
}
