import { Component } from '@angular/core';

import '../assets/app.css';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})




export class AppComponent {



items: Array<any> = []
constructor() {
    this.items = [
      { name: '../assets/img/slide1.png' },
      { name: '../assets/img/slide2.png' },
      { name: '../assets/img/slide3.png' },
      { name: '../assets/img/slide4.png' },
      { name: '../assets/img/slide5.png' },
      { name: '../assets/img/slide6.png' },
      { name: '../assets/img/slide7.png' },
      { name: '../assets/img/slide8.png' },
      { name: '../assets/img/slide9.png' },
      { name: '../assets/img/slide10.png' }

    ]
  }

  ngOnInit() {

  }


}
