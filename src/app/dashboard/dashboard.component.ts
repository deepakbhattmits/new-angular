import { NgModule, Component, OnInit, } from '@angular/core';
import { User } from '../_models/index';
import { AlertService, UserService } from '../_services/index';



@Component({
  selector: 'app-dasboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashBoardComponent implements OnInit {
  users: User[] = [];
  searchText : string;
  uname = "username";
  fname = "firstname";
  lname = "lastname";
  action = "action";
  delete = "delete";
  edit = "edit";
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


}
