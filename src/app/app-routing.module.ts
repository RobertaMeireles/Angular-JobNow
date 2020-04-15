import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './containers/home/home/home.component';
import { RegisterComponent } from './containers/register/register.component';
import { LoginComponent } from './containers/login/login.component';
import { ContactComponent } from './containers/contact/contact.component';

import { CurriculumComponent } from './containers/curriculum/curriculum.component';
import { ApplicantAreaComponent } from './containers/applicant-area/applicant-area.component';
import { LogoffComponent } from './containers/logoff/logoff.component';

import { CompanyAreaComponent } from './containers/company-area/company-area/company-area.component';
import { RegisterPositionComponent } from './containers/register-position/register-position.component';
import { ListPositionRegisterComponent } from './containers/list-position-register/list-position-register.component';


import { DetailsPositionComponent } from './containers/details-position/details-position.component';


import { AllApplyComponent } from './containers/all-apply/all-apply.component';
import { CurriculumCompanyComponent } from './containers/curriculum-company/curriculum-company.component';
import { CompanyAreaResultComponent } from './containers/company-area-result/company-area-result.component';

const routes: Routes = [
  //NAVBAR HOME
  { path: '', 
  component: HomeComponent
  },

  { path: 'home', 
    component: HomeComponent
  },

  { path: 'register', 
  component: RegisterComponent
  },

  { path: 'login', 
  component: LoginComponent
  },

  { path: 'contact', 
  component: ContactComponent
  },

  //NAVBAR APPLICANT LOGIN
  { path: 'curriculum', 
  component: CurriculumComponent
  },

  { path: 'search-position', 
  component: ApplicantAreaComponent
  },

  { path: 'logoff', 
  component: LogoffComponent
  },

  //NAVBAR COMPANY

  { path: 'seach-applicant', 
  component: CompanyAreaComponent
  },

  { path: 'register-position', 
  component: RegisterPositionComponent
  },

  { path: 'list-positions-registered', 
  component: ListPositionRegisterComponent
  },


  //DETAILS POSITION (HOME)
  { path: 'details-position/:id', 
  component: DetailsPositionComponent
  },

  //LIST APPLY
  { path: 'all-apply/:id', 
  component: AllApplyComponent
  },

  //CONSULT CV
  { path: 'consult/:id', 
  component: CurriculumCompanyComponent
  },

  //CONSUT APPLY
  { path: 'consult-apply/:interest', 
  component: CompanyAreaResultComponent
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],















exports: [RouterModule]
})
export class AppRoutingModule { }
