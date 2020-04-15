import { Injectable } from '@angular/core';
import { User } from '../../models-project/users';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:3000';

  getAll(){
    return this.http.get<User[]>(this.url+"/users")
  }

  addUser(user:User){
    return this.http.post<User>(this.url+"/users",user)
  }

  async addUserAsync(user:User){
    await this.http.post(this.url+"/users",user).toPromise()
  }

  createNewUser(user:User){
    this.http.post(this.url+"/users",user).toPromise().then( () =>
      {
        this.getNewUserId(user.email).then(result => 
          {
            return this.newUserCurriculum(result.id).subscribe();
          }
        )
      }
    )
  }

  async getNewUserId(email:string){
    return this.http.get<User>(this.url + '/users?email='+email).toPromise()
  }

  newUserCurriculum(id:Number){
    return this.http.post(this.url+"/curriculum",
      {
        email: "",
        name: "",
        address: "",
        birthday: "",
        children: "",
        civil: "",
        interest: "",
        education: "",
        language: "",
        userId: id
      }
    )
  }

}

