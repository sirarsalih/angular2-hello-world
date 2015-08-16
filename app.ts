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
  template: `<div>Hello world!</div>`
})
class HelloWorld {
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
