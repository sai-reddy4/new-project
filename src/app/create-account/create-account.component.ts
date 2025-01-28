import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  id:number=0;
  data:any=[];

  constructor(private _accountService:AccountsService, _activatedRoute:ActivatedRoute,private _router:Router){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;


        _accountService.getviewaccount(data.id).subscribe(
          (data:any)=>{
            console.log(data);

            this.accountForm.patchValue(data);
          }
        )
      }
    )
  }


  public accountForm:FormGroup=new FormGroup(
    {account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl()
  }
  )
  

  
  submit(){

      //update


    if(this.id){
      console.log(this.id,this.accountForm.value);
      this._accountService.updateaccount(this.id,this.accountForm.value).subscribe(
        (data:any)=>{
          console.log(data.id);
           alert("updated successfully");
           this._router.navigateByUrl('/mywebsite/accounts');

        },(err:any)=>{
          alert('ERROR')
        }
      )
    }
    //create

    else{
      console.log(this.accountForm.value);
      this._accountService.createaccount(this.accountForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("Created successfully");
          this._router.navigateByUrl("/mywebsite/accounts");
        },(err:any)=>{
          alert("ERROR");
        }
      )
    }
  
  }
}


