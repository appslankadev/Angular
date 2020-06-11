import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Appslanka Dev Portal';
  user = "staff";
  heroes : string[] = ['Vijay', 'Surya', 'Vikaram', 'Rajani', 'kamal', 'karthick', 'simpu', 'sethupathi'];
  time: number= 23;
  values : number = 0;

  clickMe(x){
    this.time = x;
  }

  calculate(event){
    console.log(event);
    this.values = event.target.value * 180;
  }
}
