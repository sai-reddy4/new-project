import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-view-accout',
  templateUrl: './view-accout.component.html',
  styleUrls: ['./view-accout.component.css']
})
export class ViewAccoutComponent {

view:any=[];

constructor(private _accountsService:AccountsService, _activatedRoute:ActivatedRoute, private _router:Router){

  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      

      _accountsService.getviewaccount(data.id).subscribe(
        (data:any)=>{
          console.log(data);
          this.view=data;
        }
      )
    }
  )
}

}
