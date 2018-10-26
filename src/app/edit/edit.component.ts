import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { User } from '../_models/index';
import { AlertService, UserService } from '../_services/index';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(  private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.loadAllUsers()
  }
  model = new User();
  id = this.route.snapshot.params['id'];
  loadAllUsers(){
    this.userService.getById(this.id).subscribe(user =>{
         this.model = user[0];

        })
  };
  updateUser() {
      // console.log("model : ",this.model );
    this.userService.update(this.model).subscribe( userData => {
      this.alertService.success("User Updated",true);
      this.goBack();
    });
  }
  goBack(){
    // console.log("call ho raha hai");
    this.router.navigate(['/home']);
  }

}
