import { Component } from '@angular/core';
import { IdcardService } from '../idcard.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-idcard',
  templateUrl: './create-idcard.component.html',
  styleUrls: ['./create-idcard.component.css']
})
export class CreateIdcardComponent {
  
id:number=0;
  

  constructor(private _idcardService:IdcardService,private _router:Router,_activatedRoute:ActivatedRoute){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;

        _idcardService.getviewidcard(data.id).subscribe(
          (data:any)=>{
            console.log(data);

            this.idcardForm.patchValue(data);
          }
      )

      }
      )
      
  }

  public idcardForm:FormGroup=new FormGroup(
    {name:new FormControl(),
      phone:new FormControl(),
      city:new FormControl(),
      profile_picture:new FormControl(),
      email:new FormControl(),
      dob:new FormControl(),
      id:new FormControl()

    }
  )

  submit(){

    if(this.id){

    this._idcardService.updateidcard(this.id,this.idcardForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("created");
        this._router.navigateByUrl("/mywebsite/idcard");

      },(error:any)=>{
        alert("error");
      }
    )

  }
  else{
    console.log(this.idcardForm.value);

    this._idcardService.createIdcard(this.idcardForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Created");
        this._router.navigateByUrl("/mywebsite/idcard");
      },(err:any)=>{
        alert("eRROR")
      }
    )
  
  }
}



}
