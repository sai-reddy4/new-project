import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MywebsiteComponent } from './mywebsite/mywebsite.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';

const routes: Routes = [
  
  {path:'mywebsite',component:MywebsiteComponent, children:[{path:'home',component:HomeComponent},
     {path:'welcome',component:WelcomeComponent},
     {path:'databinding',component:DatabindingComponent},
    {path:'calculator',component:CalculatorComponent},
     {path:'rectangle',component:RectangleComponent},
     {path:'circle',component:CircleComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'bmi',component:BMIComponent}],
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
