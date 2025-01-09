import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  name:string="sai";
  age:number=28;
  email:string="sai@gmail.com"

  isIndian:boolean=false;

  phone:string="+91"

  num1:number=0;
  num2:number=0;
  result:number=0;


  sum(){
    this.result=this.num1+this.num2;
    console.log(this.result);
  }



  // user:any={
  //   name:"sai",
  //   age:26,
  //   email:"sai@gmail.com",

  // }

  submit(){
    alert("clicked")
  }
  typing(){
    alert("typing.....")
  }
       
}
