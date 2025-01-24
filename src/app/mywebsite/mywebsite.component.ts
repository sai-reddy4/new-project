import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mywebsite',
  templateUrl: './mywebsite.component.html',
  styleUrls: ['./mywebsite.component.css']
})
export class MywebsiteComponent {

  constructor( private _router:Router){}
logout(){
  sessionStorage.removeItem("token");
  alert("logout Successfully")
  this._router.navigateByUrl("/login");
}
}
