import { Component, OnInit } from '@angular/core';
import { User } from '../../models-project/users';
import { RegisterService } from './../../services-project/register/register.service';
import { NoNavbarService } from './../../services-project/no-navbar/no-navbar.service';
import { LoginService } from './../../services-project/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private noNavbarService:NoNavbarService, 
              private loginService: LoginService,
              private router:Router,
              private registerService:RegisterService)  { }

  errorMessage: string;
  users:User[]=null;

  ngOnInit(): void {

    this.registerService.getAll().subscribe(u=>this.users = u) 

    this.noNavbarService.changeShowNavbar()
  }

  showNavbarCorrect(){
    if(this.loginService.usertype === "company"){
      this.noNavbarService.changeShowNavbar()
      this.router.navigate(['seach-applicant'])
    }else if(this.loginService.usertype === "applicant"){
      this.noNavbarService.changeShowNavbar()
      this.router.navigate(['search-position'])
    }else{
      this.errorMessage = 'Informations are not correct!';
    }
  }


  doLogin(email: HTMLInputElement, password: HTMLInputElement){
    this.loginService.tryLogin(email.value,password.value,this.users)
    this.showNavbarCorrect()
  }
}
