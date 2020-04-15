import { Component, OnInit } from '@angular/core';
import { PositionService } from './../../services-project/position/position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-position',
  templateUrl: './search-position.component.html',
  styleUrls: ['./search-position.component.css']
})
export class SearchPositionComponent implements OnInit {

  constructor(private positionService:PositionService,
              private router:Router) { }

  url = 'http://localhost:3000';
  
  ngOnInit(): void {
  }

  info(job:string,districs:string,category:string){
    this.positionService.getPositions(job,category,districs).subscribe(result=>
      {
        this.positionService.setPositions(result)
        this.router.navigate(['search-position'])
      })
  }
    
}

