import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../dataService/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //properties
  page:string = 'Login Form'
  imgURL:string = 'https://www.freeiconspng.com/uploads/login-icon-png-27.png'
  //constructor method: dependency injection
  constructor(private loginRouter:Router, private data:DataService ){
    this.data.url = this.imgURL

  }

  //userdefined function
  login(pswd:any): void{
    console.log(pswd.value)
    
    alert('Login Clicked!!!!')
    this.loginRouter.navigateByUrl('home')
  }
  getUsername(event:any){
    console.log(event.target.value);
  }
  

}
