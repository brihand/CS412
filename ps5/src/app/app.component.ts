import { Component } from '@angular/core';


import { Data } from './data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ps5';

  cityName: Data [] = [];

  constructor(private http: HttpClient){

    this.http.get('http://localhost:3000/ps4/').subscribe(data => {
      this.cityName = data['city'];
      console.log(this.cityName);
    }, error => console.error(error));
  }
}
