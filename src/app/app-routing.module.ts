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
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsComponent } from './forms/forms.component';
import { AuthenticationGuard } from './authentication.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ViewIdComponent } from './view-id/view-id.component';
import { ViewAccoutComponent } from './view-accout/view-accout.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingsComponent } from './ratings/ratings.component';

const routes: Routes = [
   
  {path:'',component:LoginComponent},

  {path:'login',component:LoginComponent},
  
  
  {path:'mywebsite',canActivate:[AuthenticationGuard],component:MywebsiteComponent, children:[
    {path:'home',component:HomeComponent},
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
    {path:'create-idcard',component:CreateIdcardComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'forms',component:FormsComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'view-id/:id',component:ViewIdComponent},
    {path:'edit-id/:id',component:CreateIdcardComponent},
    {path:'view-account/:id',component:ViewAccoutComponent},
    {path:'create-account',component:CreateAccountComponent},
    {path:'edit-account/:id',component:CreateAccountComponent},
    {path:'sibling1',component:Sibling1Component},
    {path:'sibling2',component:Sibling2Component},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'ratings',component:RatingsComponent}],
  

    
  },
  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
