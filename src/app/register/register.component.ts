import { Component } from '@angular/core';

import {ActivatedRoute, Params, Router} from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    styleUrls: ['./register.component.css'],
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }
    register() {
        this.loading = true;

        this.userService.create(this.model)
            .subscribe(
                data => {
                    // this.alertService.success('Registration successful', true);
                    var str = JSON.parse(data).response;
                    // console.log("str :",str);
                    if(str.indexOf("Exist") != -1) {
                      this.alertService.error(JSON.parse(data).response,true);
                      // form.reset();
                      this.loading = false;
                    } else {
                      this.alertService.success(JSON.parse(data).response,true);
                      this.router.navigate(['/login']);
                    }

                },
                error => {
                  this.alertService.error(error);
                  this.loading = false;
                });
    }
}
