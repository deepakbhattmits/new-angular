import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params, Router} from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
