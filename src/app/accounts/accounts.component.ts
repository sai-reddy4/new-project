import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accunt:any=[];
  accounts: any;

  constructor( private _accountsService:AccountsService){
    _accountsService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts=data;
      console.log(this.accounts)
      }
    )
  }

  sai:string="";

  filter(){
    this._accountsService.getfilter(this.sai).subscribe(
      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      },(err:any)=>{
        alert("error")
      }
    )
  }
  column:number=0;
  order:number=0;

  sort(){
    this._accountsService.getSortAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      },(err:any)=>{
        alert("Error")
      }
    )
  }

  limit:number=0;
  page:number=0;

  pegination(){
    this._accountsService.getPeginationAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      },(err:any)=>{
        alert("error");
      }
    )

    
  }
  
  delete(id:number){

   if(confirm("Are you sure")==true){
    this._accountsService.deleteAccounts(id).subscribe(
      (data:any)=>{
        alert("deleted");
      location.reload();
      },(err:any)=>{
        alert("error")
      }
    )

    }else{
      alert("you have cancelled")
    }
   }
  
  
  }


