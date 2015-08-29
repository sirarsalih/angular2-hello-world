/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'hello-world'
})
@View({
  template: `<div>Hello {{conference}}!</div>`
})
class HelloWorld {
  conference: string;
  
  constructor(){
    this.conference = "JavaZone 2015";
  }
}

bootstrap(HelloWorld);


/**Experimental code below **/

// /// <reference path="typings/angular2/angular2.d.ts" />
// 
// import {
//   Component,
//   View,
//   bootstrap,
// } from "angular2/angular2";
// 
// @Component({
//   selector: 'car',
//   properties: ['car'],
//   events: ['click']
// })
// @View({
//   template: `
//   <div class="car-row" (click)="display()">
//     <div car-name [name]="car.name">
//     </div>
//     <div car-price [price]="car.price">
//     </div>
//   </div>
//   `,
//   directives: [CarName, CarPrice]
// })
// class CarRow {
//   car: Car;
//   click: EventEmitter;
//   
//   constructor(){
//     this.click = new EventEmitter();
//   }
//   
//   display() {
//     this.click.next(this.car);
//   }
// }
// bootstrap(CarRow);

/// <reference path="typings/angular2/angular2.d.ts" />

// import {
//   Component, 
//   View,
//   bootstrap,
//   bind
//   } from "angular2/angular2";
// import {AngularFire, FirebaseArray} from 'firebase/angularfire';
// 
// @Component({
//   selector: 'hello-world',
//   componentServices: [
//     AngularFire,
//     bind(Firebase).toValue(new Firebase('https://webapi.firebaseio-demo.com/test'))
// ]})
// @View({
//   template: `<div>Hello world!</div>`
// })
// class HelloWorld {
//   todoService: FirebaseArray;
// 
//   constructor(sync: AngularFire) {
//     this.todoService = sync.asArray();
//   }
// }
// 
// bootstrap(HelloWorld);
