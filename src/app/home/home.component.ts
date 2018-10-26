import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';

import {ActivatedRoute, Params, Router} from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    uname = "username";
    fname = "firstname";
    lname = "lastname";
    action = "action";
    delete = "delete";
    edit = "edit";
    users: User[] = [];

    constructor(private userService: UserService, private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    }

    ngOnInit() {
        this.loadAllUsers();
    }

    loadAllUsers(){
       this.userService
          .getAll()
          .subscribe(users => {
            this.users = users;
        } );
    }
    deleteUser(id) {
          this.userService.delete(id).subscribe(() => {
          this.loadAllUsers();
          this.alertService.error("User Deleted",true);
       });
    }


}
