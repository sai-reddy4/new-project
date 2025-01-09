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

}
