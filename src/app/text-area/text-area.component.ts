import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent  {

  @Input() 

  max:number=0;
  charecters:string='';
  text:number=0;

  textlimit(event:any){
    this.text=this.charecters.length;
    if(this.text==this.max){
      
      alert('maximum reached')
    }

  }
}

 


