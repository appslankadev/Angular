import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite heros are: {{myHero}} </h2>
    <h3> my courses are {{ courses}} </h3>
    <ul>
    <li style="color:red;padding:20" *ngFor="let course of courses; let i = index">
     {{ i + 1 }} {{ course }}
    </li>
    </ul>
    <hr/>
    <ol>
    <li style="color:blue;" *ngFor="let heroName of heros">
      {{ heroName }}
   </li>
   </ol>
    `
})
export class AppComponent {
  title = 'Appslanka Dev Portal';
  myHero = "Vijay and Ajith";
  heros = [ "Vijay", "Ajith", "Vikarm", "Arya", "Nayanthara"];
  courses = ["php", "laravel", "ionic", "angular", "android","swift"]; // array
  lists = [1, "2", 3]; // number, string, bool

}
