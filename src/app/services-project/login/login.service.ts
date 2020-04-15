import { Injectable } from '@angular/core';
import { User } from '../../models-project/users';
import { RegisterService } from './../register/register.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private registerService: RegisterService,
              private http:HttpClient) {}

  usertype: string = "";
  loggedUser:User= null;

  url = 'http://localhost:3000';

  tryLogin(typedUser: string, typedPassword: string, users:User[]){
    let userFound = false
    users.forEach(function(user){
		  if(user.email ==  typedUser && user.password == typedPassword){
        this.usertype = user.type
        this.loggedUser = user
        userFound = true
		  }
    }.bind(this)
    );
    if(!userFound){
      this.loggedUser = null
    }
  }

  getUserByEmail(email:string){
    return this.http.get<User>(this.url + '/users?email=' + email)
  }

  setUsertype(type:string){
    this.usertype = type;
  }
  
	
}
  

