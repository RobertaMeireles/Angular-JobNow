import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { User } from '../../models-project/users';
import { RegisterService } from './../../services-project/register/register.service';
import { NoNavbarService } from './../../services-project/no-navbar/no-navbar.service';
import { Router } from '@angular/router';
import { LoginService } from './../../services-project/login/login.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private noNavbarService:NoNavbarService,
              private registerService: RegisterService,
              private loginService: LoginService,
              private router:Router) { }

  errorMessage: string;
  users:User[]=null;

  @Output()
  ApplicantCreated = new EventEmitter<User>();

  ngOnInit(): void {

    this.registerService.getAll().subscribe(u=>this.users = u) 

    this.noNavbarService.changeShowNavbar()
  }
  

  addApplicant(email: HTMLInputElement, password: HTMLInputElement, password2: HTMLInputElement): boolean {

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!re.test(email.value)){
      this.errorMessage = 'E-mail is not correct!';
      return false;
    
    }else if (email.value === '' || password.value === '') {
      this.errorMessage = 'E-mail and Password is required!';
      return false;

    }else if (password.value != password2.value){
      this.errorMessage = 'Passwords are not the same';
      return false;

    }else if (password.value.length < 5){
      this.errorMessage = 'Password need 5 caracteres';
      return false;
    }

    let newUser = new User(email.value,password.value,"applicant","",null)
    this.registerService.addUser(newUser).subscribe(result => {
      this.registerService.newUserCurriculum(result.id).subscribe();
      this.loginService.loggedUser.id = result.id;
    });

    this.users.push(newUser);

    this.loginService.tryLogin(email.value,password.value,this.users)

    this.errorMessage = null;
    email.value = null;
    password.value = null;
    password2.value = null;

    this.noNavbarService.changeShowNavbar()

    this.router.navigate(["home"]);

    return false;

  }
}

