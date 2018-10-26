import { NgModule, Component, OnInit, } from '@angular/core';
import { Countries, States, Cities, Pincode } from '../_models/index';
import { AlertService, CountryService } from '../_services/index';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
countries : Countries[] = [];
states : States[] = [];
cities : Cities[] = [];
pincode : Pincode[] = [];

constructor(private countryService: CountryService) { }

  ngOnInit() {
    // console.log("execute");
    this.loadCountries();
  }
  loadCountries () {
    this.countryService
       .getAllCountries()
       .subscribe(resp => {
         //console.log("countries", resp);
         this.countries = resp;
     });
  }
  changeCountry(event){
    console.log("selected",event.value);
    this.countryService
       .getStateByCountryId(event.value)
       .subscribe(resp => {
        //  console.log("states : ", resp);
         this.states = resp;
     });
  }
  changeState(event){
    // console.log("selected state",event.value);
    this.countryService
       .getCityByStateId(event.value)
       .subscribe(resp => {
         // console.log("cities : ", resp);
         this.cities = resp;
     });
  }
  changeCity(event){
    console.log("selected city : ", event.value);
    this.countryService
       .getPindcodeByCityName(event.value)
       .subscribe(resp => {
         // console.log("Pincode : ", resp);
         this.pincode = resp[0].pincode;
         // console.log("Pincode in var  : ", this.pincode);
     });
  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  submitdata (){
    console.log("WANT ADD: ",this.fruits);
  }

  }
