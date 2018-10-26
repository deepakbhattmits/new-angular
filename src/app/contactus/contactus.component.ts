import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params, Router} from '@angular/router';

import { AlertService, UserService } from '../_services/index';

import { User } from '../_models/index';

import { Address } from '../address';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {


 address = new Address();
 users : User[] = [];
 selectedFile: File;
 msg : string;
 msgblank : string;
 data = [];
 array = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
      this.loadAllUsers();

  }
  loadAllUsers() {
     this.userService
        .getAll()
        .subscribe(users => {

          this.users = users;
      } );
  }
  numberOnly(event): boolean {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        this.msg = "Digits Only";
        return false;
      }
      this.msg = '';
      return true;

    }

  onSubmit() {
    this.data = this.address;
    //console.log("TEST DATA new: ",this.data.postalcode,typeof( this.data ),"type : ",typeof(this.data.postalcode), this.data.postalcode.length);
        if(this.data.postalcode.length == 5 && (this.data.postalcode).replace(/\s/g,"") === "") {
          alert('Please enter valid data');
        } else {
           console.log("test : ",this.address);

          alert("Thanks for submitting! Data: " + JSON.stringify(this.data));
          this.array = $.map(this.address, function(value, index) {
              return [value];
          });
          console.log("array val : ", this.array[0]);
          // this.data = JSON.stringify(this.address);
        }
      }

}
