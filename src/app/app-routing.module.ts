import { AlertComponent } from './alert/alert.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';
import { BiddermarketplaceComponent } from './biddermarketplace/biddermarketplace.component';
import { HomeComponent } from './home/home.component';
import { CropComponent } from './crop/crop.component';
import { LoginComponent } from './login/login.component';
import { FarmerregistrationComponent } from './farmerregistration/farmerregistration.component';
import { FarmerWelcome2Component } from './farmer-welcome2/farmer-welcome2.component';
import { ViewsoldhistoryComponent } from './viewsoldhistory/viewsoldhistory.component';
import { ViewmarketplaceComponent } from './viewmarketplace/viewmarketplace.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { NotificationComponent } from './notification/notification.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceClaimFormComponent } from './insurance-claim-form/insurance-claim-form.component';
import { InsuranceApplicationFormComponent } from './insurance-application-form/insurance-application-form.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'app-login', component:LoginComponent},
  {path:'farmerregistration', component: FarmerregistrationComponent},
  {path:'crop', component: CropComponent},
  {path:'app-farmer-welcome2', component:FarmerWelcome2Component},
  {path:'app-viewsoldhistory', component:ViewsoldhistoryComponent},
  {path:'app-viewmarketplace', component:ViewmarketplaceComponent},
  {path:'app-home', component:HomeComponent},
  {path:'app-contact-us', component:ContactUsComponent},
  {path:'app-about', component:AboutComponent},
  {path:'biddermarketplace', component:BiddermarketplaceComponent},
  {path:'app-contact-us',component:ContactUsComponent},
  {path:'app-admin',component:AdminComponent},
  {path:'notification',component:NotificationComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'error',component:ErrorComponent},
  {path:'alert',component:AlertComponent},
  {path:'Notification',component:NotificationComponent},
  {path:'Insurance',component:InsuranceComponent},
  {path:'Claim',component:InsuranceClaimFormComponent},
  {path:'ApplicationForm',component:InsuranceApplicationFormComponent}

  

];
@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
