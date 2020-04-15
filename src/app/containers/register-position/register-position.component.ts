import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Position } from './../../models-project/positions';
import { PositionService } from './../../services-project/position/position.service';
import { LoginService } from './../../services-project/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-position',
  templateUrl: './register-position.component.html',
  styleUrls: ['./register-position.component.css']
})
export class RegisterPositionComponent implements OnInit {

  constructor(private positionService: PositionService,
              private loginService:LoginService,
              private router:Router) { }


  errorMessage: string;

  @Output()
  ApplicantCreated = new EventEmitter<Position>();


  ngOnInit(): void {
  }

  validate(title: HTMLInputElement, 
          category: HTMLInputElement, 
          city: HTMLInputElement, 
          resume: HTMLInputElement): boolean {

      if(title.value === '' || 
        category.value === ''|| 
        city.value === ''|| 
        resume.value === '' ){
          this.errorMessage = 'Required field';
          return false;
      }

      this.addPosition(title,category,city,resume)
      
      return false;
    }

    addPosition(title: HTMLInputElement, 
              category: HTMLInputElement, 
              city: HTMLInputElement, 
              resume: HTMLInputElement ){
    let newPosition:Position = new Position(this.loginService.loggedUser.email,this.loginService.loggedUser.name,title.value,category.value,city.value,resume.value)
    
    
    this.positionService.addPosition(newPosition).subscribe();
    this.router.navigate(["home"]);
    }

}

