import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite heros are: {{myHero}} </h2>
    <h3> my courses are {{ courses}} </h3>
    `
})
export class AppComponent {
  title = 'Appslanka Dev Portal';
  myHero = "Vijay and Ajith";
  courses = "php, laravel, ionic, angular, android,swift"

  endaHerovaKonduvaa(){
    this.title = "vijay";
  }
}
