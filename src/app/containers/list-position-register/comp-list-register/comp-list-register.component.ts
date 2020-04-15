import { Component, OnInit,Input } from '@angular/core';


import { Position } from './../../../models-project/positions';
import { PositionService } from './../../../services-project/position/position.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-comp-list-register',
  templateUrl: './comp-list-register.component.html',
  styleUrls: ['./comp-list-register.component.css']
})
export class CompListRegisterComponent implements OnInit {

  constructor(private positionService:PositionService,
              private router:Router) { }

  
  //Passar o parametro (qual o position) para o serviço possa deletar
  deletePos(){
    this.positionService.deletePosition(this.inputPosition).subscribe();
    this.router.navigate(['seach-applicant'])
  }

  listApply(){
    
  }


  @Input() inputPosition:Position = null; //variavel para apresentar no inFor

  ngOnInit(): void {
    
  }

 
  
  
}
