import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  public userForm:FormGroup=new FormGroup({
    name:new FormControl(),
    class:new FormControl(),
    fathername:new FormControl(),
    email:new FormControl(),

       address:new FormGroup({
        addressline:new FormControl(),
        city:new FormControl(),
        state:new FormControl(),
        pincode:new FormControl(),
       }),

       s:new FormControl(),
       marks:new FormArray([]),
  })

      get marksFormArray(){
        return this.userForm.get('marks') as FormArray
      }

      marks(){
        this.marksFormArray.push(
          new FormGroup({
            class:new FormControl(),
            year:new FormControl(),
            percentage:new FormControl(),
            
          })
        )
      }

      delete(i:number){
        this.marksFormArray.removeAt(i);
      }

  constructor(){
    this.userForm.get('s')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholar'){
          this.userForm.addControl('busfee',new FormControl());
          this.userForm.removeControl('hostelfee');

        }else{
          this.userForm.addControl('hostelfee',new FormControl());
          this.userForm.removeControl('busfee');

        }
      }
    )
  }


  create(){
    console.log(this.userForm.value);
  }
}
