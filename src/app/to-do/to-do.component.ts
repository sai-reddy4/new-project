import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  text:any;
  lists:any=[];

  addtask(){
    if(this.text.trim() !==""){
      this.lists.push(this.text);
      this.text="";
    }

  }

  delete(i:number){
    this.lists.splice(i,1);

  }
}
