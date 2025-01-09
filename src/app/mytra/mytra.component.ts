import { Component } from '@angular/core';
import { MytraService } from '../mytra.service';

@Component({
  selector: 'app-mytra',
  templateUrl: './mytra.component.html',
  styleUrls: ['./mytra.component.css']
})
export class MytraComponent {

  mytras:any=[];

  constructor(private _mytraService:MytraService){
    _mytraService.getmytras().subscribe(
      (data:any)=>{
        this.mytras=data;
        console.log(this.mytras);
      }
    )
  }

}
