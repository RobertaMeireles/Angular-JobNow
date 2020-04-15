import { Component, OnInit } from '@angular/core';
import { PositionService } from './../../services-project/position/position.service';
import { Position } from 'src/app/models-project/positions';
import { LoginService } from './../../services-project/login/login.service';

@Component({
  selector: 'app-list-position-register',
  templateUrl: './list-position-register.component.html',
  styleUrls: ['./list-position-register.component.css']
})
export class ListPositionRegisterComponent implements OnInit {

  constructor(private positionService:PositionService,
              private loginService:LoginService) { }

  allPositions:Position[]; 

  ngOnInit(): void {

    this.positionService.getByEmail(this.loginService.loggedUser.email).toPromise().then(result =>this.allPositions = result)
    //subscribe(result =>this.allPositions = result)
  }

}

