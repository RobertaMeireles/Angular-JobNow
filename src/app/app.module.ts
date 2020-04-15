import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchPositionComponent } from './shared/search-position/search-position.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AllApplyComponent } from './containers/all-apply/all-apply.component';
import { ApplicantAreaComponent } from './containers/applicant-area/applicant-area.component';
import { CurriculumComponent } from './containers/curriculum/curriculum.component';
import { DetailsPositionComponent } from './containers/details-position/details-position.component';
import { RegisterPositionComponent } from './containers/register-position/register-position.component';
import { LoginComponent } from './containers/login/login.component';
import { HomeComponent } from './containers/home/home/home.component';
import { LastPositionsComponent } from './containers/home/last-positions/last-positions/last-positions.component';
import { ContactComponent } from './containers/contact/contact.component';
import { LogoffComponent } from './containers/logoff/logoff.component';
import { CompanyAreaComponent } from './containers/company-area/company-area/company-area.component';
import { ListSearchCurriculumComponent } from './containers/company-area/list-search-curriculum/list-search-curriculum.component';
import { SearchCurriculumComponent } from './containers/company-area/search-curriculum/search-curriculum.component';
import { AllPositionComponent } from './shared/all-position/all-position.component';
import { RegisterComponent } from './containers/register/register.component';
import { SearchPositionLogoffComponent } from './containers/search-position-logoff/search-position-logoff.component';
import { ListPositionRegisterComponent } from './containers/list-position-register/list-position-register.component';


import { LoginService } from './services-project/login/login.service';
import { NoNavbarService} from './services-project/no-navbar/no-navbar.service';
import { RegisterService } from './services-project/register/register.service';
import { CurriculumService } from './services-project/curriculum/curriculum.service';
import { PositionService } from './services-project/position/position.service';
import { ExperienceComponent } from './containers/curriculum/experience/experience.component';
import { CompListRegisterComponent } from './containers/list-position-register/comp-list-register/comp-list-register.component';
import { CurriculumCompanyComponent } from './containers/curriculum-company/curriculum-company.component';
import { ExperienceCompanyComponent } from './containers/curriculum-company/experience-company/experience-company.component';
import { CompanyAreaResultComponent } from './containers/company-area-result/company-area-result.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SearchPositionComponent,
    NavbarComponent,
    AllApplyComponent,
    ApplicantAreaComponent,
    CurriculumComponent,
    DetailsPositionComponent,
    RegisterPositionComponent,
    LoginComponent,
    HomeComponent,
    LastPositionsComponent,
    ContactComponent,
    LogoffComponent,
    CompanyAreaComponent,
    ListSearchCurriculumComponent,
    SearchCurriculumComponent,
    AllPositionComponent,
    RegisterComponent,
    SearchPositionLogoffComponent,
    ListPositionRegisterComponent,
    ExperienceComponent,
    CompListRegisterComponent,
    CurriculumCompanyComponent,
    ExperienceCompanyComponent,
    CompanyAreaResultComponent

  ],
  imports: [
  

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [
    LoginService,
    NoNavbarService,
    RegisterService,
    PositionService,
    CurriculumService
  ],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
