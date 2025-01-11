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
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MytraComponent } from './mytra/mytra.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { IdcardComponent } from './idcard/idcard.component';
import { CreateIdcardComponent } from './create-idcard/create-idcard.component';

const routes: Routes = [
  
  {path:'mywebsite',component:MywebsiteComponent, children:[{path:'home',component:HomeComponent},
     {path:'welcome',component:WelcomeComponent},
     {path:'databinding',component:DatabindingComponent},
    {path:'calculator',component:CalculatorComponent},
     {path:'rectangle',component:RectangleComponent},
     {path:'circle',component:CircleComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'bmi',component:BMIComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'mytra',component:MytraComponent},
    {path:'mail',component:MailComponent},
    {path:'pinterest',component:PinterestComponent},
    {path:'blog',component:BlogComponent},
    {path:'imdb',component:ImdbComponent},
    {path:'weather',component:WeatherComponent},
    {path:'profile',component:ProfileComponent},
    {path:'carousel',component:CarouselComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'idcard',component:IdcardComponent},
    {path:'create-idcard',component:CreateIdcardComponent}],
  

    
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
