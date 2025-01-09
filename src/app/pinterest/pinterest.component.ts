import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
  pinterest: any=[];

  constructor(private _pinterestService:PinterestService){
    _pinterestService.getpinterest().subscribe(

      (data:any)=>{
        this.pinterest=data;
      }
    )
  }

}
