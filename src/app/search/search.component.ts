import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { AlertService, UserService } from '../_services/index';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users : User[] = [];
  selectedUserArr = [];
  // selectedUser = '' ;
  searchText : string ;
  uid = "id";
  uname = "username";
  fname = "firstname";
  lname = "lastname";
  action = "action";
  delete = "delete";
  edit = "edit";
  constructor(private userService: UserService, private alertService: AlertService) { }

  ngOnInit() {
      this.loadAllUsers();
  }

  changeClient(event){
      this.userService
         .getById(event.value)
         .subscribe(users => {
          var arr = Array.from(Object.keys(users), k=>users[k]);
           this.selectedUserArr = arr;
       } );
  }
  deleteUser(id) {
      this.userService.delete(id).subscribe(() => {
          this.selectedUserArr.pop();
          this.loadAllUsers();
          this.alertService.error("User Deleted",true);
     });
  }
  addUser(){
    console.log("add ");
  }
  loadAllUsers() {
     this.userService
        .getAll()
        .subscribe(users => {
          this.users = users;
      } );
  }


}
