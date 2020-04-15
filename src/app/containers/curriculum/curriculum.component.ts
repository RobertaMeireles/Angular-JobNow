import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Curriculum, Experience } from './../../models-project/curriculum';
import { LoginService } from './../../services-project/login/login.service';
import { CurriculumService } from './../../services-project/curriculum/curriculum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  constructor(private curriculumService:CurriculumService,
              private loginService:LoginService,
              private router:Router) {
               }

  errorMessage: string;
  experiencesApplicant:Experience[];
  currentCurriculum:Curriculum;
  userId:number;
  newCurriculum:Boolean = false;

  ngOnInit(): void {
    // DESCOMENTAR PARA FUNCIONAR O REGISTER (MAS O NAVBAR PARA DE FUNCIONAR)
    this.curriculumService.getCurriculum(this.loginService.loggedUser.id).subscribe(x => this.currentCurriculum = x[0]);
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  validate( 
          name: HTMLInputElement, 
          address: HTMLInputElement, 
          birthday: HTMLInputElement,
          children:HTMLInputElement,
          civil: HTMLInputElement,
          interest: HTMLInputElement,
          education: HTMLInputElement,
          idiom:HTMLInputElement): boolean {

            if( 
              name.value === ''|| 
              address.value === ''|| 
              birthday.value === '' ||
              children.value === '' ||
              civil.value === '' ||
              interest.value === '' ||
              education.value === '' ||
              idiom.value === '' ){
                this.errorMessage = 'Required field';
                return false;
            }

            this.save()
  }

  save(){

    if (this.newCurriculum) {
      this.curriculumService.addCurriculum(this.currentCurriculum).subscribe()
    }
    else{
      this.curriculumService.updateCurriculum(this.currentCurriculum).subscribe()
    }

    this.currentCurriculum.experiences.forEach(exp => 
      {
        if (exp.id) {
          this.curriculumService.updateExperience(this.currentCurriculum.id,exp).subscribe();
        }
        else{
          this.curriculumService.addExperience(this.currentCurriculum.id,exp).subscribe();
        }
      }
    )

    this.router.navigate(["home"]);
  }

  addNewExperience(){
    this.currentCurriculum.experiences.push(new Experience(null,"","","","","",""))
  }

  createNewCurriculum(){
    this.currentCurriculum = new Curriculum(this.loginService.loggedUser.email,"","","","","","","","",[new Experience(null,"","","","","","")],this.loginService.loggedUser[0].id);
    this.newCurriculum = true;
  }
}

