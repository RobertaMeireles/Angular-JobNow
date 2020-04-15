import { Injectable } from '@angular/core';

import { Curriculum,Experience } from './../../models-project/curriculum';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private http:HttpClient){ 

  }

  url = 'http://localhost:3000';

    getCurriculum(id:Number){
      return this.http.get<Curriculum>(this.url +"/curriculum?userId="+id+"&_embed=experiences")
    }

    async getCurriculumAsync(id:Number){
      return await this.http.get<Curriculum>(this.url +"/curriculum?userId="+id+"&_embed=experiences").toPromise()
    }

    getAll(){
      return this.http.get<Curriculum[]>(this.url +"/curriculum")
    }

    getByInterest(interest:string){
      return this.http.get<Curriculum[]>(this.url +"/curriculum?interest="+interest)
    }



    getByUserId(id:Number){
      return this.http.get<Curriculum>(this.url +"/curriculum?id="+id)
    }

    updateCurriculum(inputCurriculum:Curriculum){
        return this.http.put(this.url + "/curriculum/"+inputCurriculum.id+"/",
        {
          email: inputCurriculum.email,
          name: inputCurriculum.name,
          address: inputCurriculum.address,
          birthday: inputCurriculum.birthday,
          children: inputCurriculum.children,
          civil: inputCurriculum.civil,
          interest: inputCurriculum.interest,
          education: inputCurriculum.education,
          language: inputCurriculum.language,
          userId: inputCurriculum.userId
        })
      }    

    async addCurriculumAsync(inputCurriculum:Curriculum){
     return await this.http.post(this.url + "/curriculum/",

        {
          email: inputCurriculum.email,
          name: inputCurriculum.name,
          address: inputCurriculum.address,
          birthday: inputCurriculum.birthday,
          children: inputCurriculum.children,
          civil: inputCurriculum.civil,
          interest: inputCurriculum.interest,
          education: inputCurriculum.education,
          language: inputCurriculum.language,
          userId: inputCurriculum.userId
        }).toPromise()
      }

    addCurriculum(inputCurriculum:Curriculum){
     return this.http.post(this.url + "/curriculum/",

        {
          email: inputCurriculum.email,
          name: inputCurriculum.name,
          address: inputCurriculum.address,
          birthday: inputCurriculum.birthday,
          children: inputCurriculum.children,
          civil: inputCurriculum.civil,
          interest: inputCurriculum.interest,
          education: inputCurriculum.education,
          language: inputCurriculum.language,
          userId: inputCurriculum.userId
        })
      }

      addExperience(idCurriculum:Number,inputExperience:Experience){
        return this.http.post(this.url + "/experiences/",
        {
          companyname: inputExperience.companyname,
          functioncompany: inputExperience.functioncompany,
          work: inputExperience.work,
          dateStart: inputExperience.dateStart,
          dateEnd: inputExperience.dateEnd,
          resume: inputExperience.resume,
          curriculumId: idCurriculum,
        })
      }

      updateExperience(idCurriculum:Number,inputExperience:Experience){
        return this.http.put(this.url + "/experiences/" + inputExperience.id,
        {
          companyname: inputExperience.companyname,
          functioncompany: inputExperience.functioncompany,
          work: inputExperience.work,
          dateStart: inputExperience.dateStart,
          dateEnd: inputExperience.dateEnd,
          resume: inputExperience.resume,
          curriculumId: idCurriculum
        })
      }
}
