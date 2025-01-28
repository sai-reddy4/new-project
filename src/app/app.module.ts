import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MywebsiteComponent } from './mywebsite/mywebsite.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {HttpClientModule} from "@angular/common/http";
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
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ViewIdComponent } from './view-id/view-id.component';
import { ViewAccoutComponent } from './view-accout/view-accout.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingsComponent } from './ratings/ratings.component';


@NgModule({
  declarations: [
    AppComponent,
    MywebsiteComponent,
    HomeComponent,
    WelcomeComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    DirectivesComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehicleComponent,
    AccountsComponent,
    MytraComponent,
    MailComponent,
    PinterestComponent,
    BlogComponent,
    ImdbComponent,
    WeatherComponent,
    ProfileComponent,
    CarouselComponent,
    CreateVehicleComponent,
    IdcardComponent,
    CreateIdcardComponent,
    LoginComponent,
    CreateUserComponent,
    FormsComponent,
    VehicleDetailsComponent,
    ViewIdComponent,
    ViewAccoutComponent,
    CreateAccountComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ChildComponent,
    RatingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
