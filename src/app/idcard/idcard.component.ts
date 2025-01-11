import { Component } from '@angular/core';
import { IdcardService } from '../idcard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent {


  idcard:any=[];

  constructor(private _idcardService:IdcardService){
    this.pageload();
  }
  pageload(){

    this._idcardService.getidcard().subscribe(
      (data:any)=>{
        this.idcard=data;
        console.log(this.idcard);
      },(err:any)=>{
        alert("Error")
      }
    )
  }
  sai:any="";

  filter(){
    this._idcardService.getFilterIdcard(this.sai).subscribe(
      (data:any)=>{
        this.idcard=data;
        console.log(this.idcard);
      },(err:any)=>{
        alert("Error")
      }
    )
  }

  column:string="";
  order:string="";

  sort(){

  this._idcardService.getSortIdcard(this.column,this.order).subscribe(
    (data:any)=>{
      this.idcard=data;
      console.log(this.idcard);
    },(err:any)=>{
      alert("Error")
    }

  )
}

limit:number=0;
page:number=0;

pagination(){
  this._idcardService.getPaginationIdcard(this.limit,this.page).subscribe(
    (data:any)=>{
      this.idcard=data;
      console.log(this.idcard);
    },(err:any)=>{
      alert("Error")
    }
  )
}
delete(id:number){
  if(confirm("ur sure")==true){
    this._idcardService.getDeleteIdcard(id).subscribe(
      (data:any)=>{
       alert("deleted");
       this.pageload();
      },(err:any)=>{
        alert("Error")
      }
    )
  }else{
    alert("ur cancelled")
  }
}

}


