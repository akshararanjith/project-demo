import { Component } from '@angular/core';
import { DataService } from '../dataService/data.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username:string = ''     
  password:string = ''
  loginValue: any;
  constructor(private  data:DataService){

  }

  register(){
    console.log(this.data.url);
    alert( `Username is ${this. username} and password is ${this.password}`)
  }
}
