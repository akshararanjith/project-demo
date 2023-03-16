import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userDetails:any= [
    {
      username:'Max',age:21
    },
    {
      username:'Mahi',age:25
    },
    {
      username:'Madi',age:29
    }
  ]

}
