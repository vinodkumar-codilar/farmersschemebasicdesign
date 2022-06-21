import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FarmerregistrationComponent } from './farmerregistration/farmerregistration.component';
import { CropComponent } from './crop/crop.component';
import { FarmerWelcome2Component } from './farmer-welcome2/farmer-welcome2.component';
import { ViewsoldhistoryComponent } from './viewsoldhistory/viewsoldhistory.component';
import { ViewmarketplaceComponent } from './viewmarketplace/viewmarketplace.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BiddermarketplaceComponent } from './biddermarketplace/biddermarketplace.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { NotificationComponent } from './notification/notification.component';
import { AlertComponent } from './alert/alert.component';
import { ErrorComponent } from './error/error.component';
import { InsuranceApplicationFormComponent } from './insurance-application-form/insurance-application-form.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceClaimFormComponent } from './insurance-claim-form/insurance-claim-form.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    FarmerregistrationComponent,
    CropComponent,
    FarmerWelcome2Component,
    ViewsoldhistoryComponent,
    ViewmarketplaceComponent,
    BiddermarketplaceComponent,
    AdminComponent,
    LogoutComponent,
    NotificationComponent,
    AlertComponent,
    ErrorComponent,
    InsuranceApplicationFormComponent,
    InsuranceClaimFormComponent,
    InsuranceComponent,


   
  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
