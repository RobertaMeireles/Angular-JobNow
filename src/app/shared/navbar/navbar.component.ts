import { Component, OnInit} from '@angular/core';
import { LoginService } from './../../services-project/login/login.service';
import { NoNavbarService } from './../../services-project/no-navbar/no-navbar.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
              private loginService:LoginService, 
              private noNavbarService:NoNavbarService,
              private router:Router) { }

  ngOnInit(): void {

  }

  //show navbar with other size
  ngAfterViewChecked(){

    $("#btn-menu").click(function(){
      $("#menu").show();
  });
  
    $("#btn-close").click(function(){
      $("#menu").hide();
    });
  }


  
  applicant(){
    if(this.loginService.loggedUser != null){
      if(this.loginService.loggedUser.type === "applicant"){
        return true;      
      }
    }else{
      return false;
    }
  }

  company(){
  if(this.loginService.loggedUser != null){
    if(this.loginService.loggedUser.type === "company"){
      return true;      
    }
  }else{
    return false;
  }
}

  noLogin(){
    if(this.loginService.loggedUser === null){
      return true;
    }else{
      return false;
    }
  }

  applicantAndCompany(){
  if(this.loginService.loggedUser != null){
    if(this.loginService.loggedUser.type === "applicant" || this.loginService.loggedUser.type === "company"){
      return true;      
    }
  }else{
    return false;
  }
}

  showNavbar(){
    return this.noNavbarService.showNavbar;
  }

  logoff(){
    this.loginService.loggedUser = null;
    this.router.navigate(['home'])
  }
}
