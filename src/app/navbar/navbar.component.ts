import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  project = "proj-";
  home = "home";
  dashboard = "dashboard";
  shop = "shop";
  search = "search";
  contactus = "contact us";
  aboutus = "about us";

  constructor() { }

  ngOnInit() {
  }

}
