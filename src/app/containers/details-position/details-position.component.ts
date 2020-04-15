import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { PositionService } from './../../services-project/position/position.service';
import { Position } from './../../models-project/positions';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from './../../services-project/login/login.service';


@Component({
  selector: 'app-details-position',
  templateUrl: './details-position.component.html',
  styleUrls: ['./details-position.component.css']
})
export class DetailsPositionComponent implements OnInit {

  constructor(private positionService:PositionService,
              private loginService:LoginService,
              private route:ActivatedRoute) { }

  @Input() inputPosition:Position;
 
  @Output()
  ApplicantCreated = new EventEmitter<Position>();
  showButton:number;

  ngOnInit(): void {
    this.positionService.getById(this.route.snapshot.params['id']).subscribe(result=>this.inputPosition=result)
    this.showButton = this.loginService.loggedUser.id
}

  apply(){
    this.positionService.apply(this.loginService.loggedUser.id,this.inputPosition.id).subscribe()
  }
}
