import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { IdcardService } from '../idcard.service';

@Component({
  selector: 'app-view-id',
  templateUrl: './view-id.component.html',
  styleUrls: ['./view-id.component.css']
})
export class ViewIdComponent {

  view:any=[];
  
  constructor(private _idcardService:IdcardService,_activatedRoute:ActivatedRoute){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);

        _idcardService.getviewidcard(data.id).subscribe(
          (data:any)=>{
            this.view=data;
            console.log(data.id);
          }
        )

      }
    )
  }

  

}
