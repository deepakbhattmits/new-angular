import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Countries, States, Cities, Pincode } from '../_models/index';

@Injectable()
export class CountryService {
    constructor(private http: HttpClient) { }

    getAllCountries() {

        return this.http.get<Countries[]>('http://localhost/a2rewlgn/api/select.php');
    }

    getStateByCountryId(id: number) {
        // return this.http.get('http://localhost/a2rewlgn/api/auth/selectone.php/'+ id );
        // console.log("TEST from service: ", id);
        return this.http.post<States[]>('http://localhost/a2rewlgn/api/selectone.php/' ,{'id':id});
    }
    getCityByStateId(id: number) {
        // return this.http.get('http://localhost/a2rewlgn/api/auth/selectone.php/'+ id );
        // console.log("TEST from service: ", id);
        return this.http.post<Cities[]>('http://localhost/a2rewlgn/api/selectcity.php/' ,{'id':id});
    }
    getPindcodeByCityName(cityname: string) {
        // return this.http.get('http://localhost/a2rewlgn/api/auth/selectone.php/'+ id );
        // console.log("TEST from service: ",cityname );
        return this.http.post<Pincode>('http://localhost/a2rewlgn/api/selectpincode.php/' ,{'cityname':cityname});
    }

    // create(user: User) {
    //     return this.http.post('http://localhost/a2rewlgn/api/register.php', user, { responseType: 'text' } );
    // }
    //
    // update(user: User) {
    //     //return this.http.put('http://localhost/a2rewlgn/api/auth/update.php/',{'id':id}, { responseType: 'text' } );
    //     return this.http.post("http://localhost/a2rewlgn/api/update.php/", user).map(()=>"");
    // }
    //
    // delete(id: number) {
    //   // console.log("want delete this : ",id);
    //     //return this.http.delete('http://localhost/a2rewlgn/api/auth/delete.php/' + id, { responseType: 'text' } );
    //     return this.http.post("http://localhost/a2rewlgn/api/delete.php/",{'id':id}).map(()=>this.getAll());
    // }
}
