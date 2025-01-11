import { Component } from '@angular/core';
import { IdcardService } from '../idcard.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-idcard',
  templateUrl: './create-idcard.component.html',
  styleUrls: ['./create-idcard.component.css']
})
export class CreateIdcardComponent {
  

  constructor(private _idcardService:IdcardService,private _router:Router){}

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

  create(){
    console.log(this.idcardForm.value);
    this._idcardService.createIdcard(this.idcardForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("created");
        this._router.navigateByUrl("/mywebsite/idcard");

      },(error:any)=>{
        alert("error");
      }
    )

  }

}
