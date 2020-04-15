import { Component, OnInit } from '@angular/core';
import { PositionService } from './../../services-project/position/position.service';
import { Position } from './../../models-project/positions';


@Component({
  selector: 'app-all-position',
  templateUrl: './all-position.component.html',
  styleUrls: ['./all-position.component.css']
})
export class AllPositionComponent implements OnInit {

  constructor(private positionService:PositionService) { }

  positions:Position[] = null;

  ngOnInit(): void {

    this.positions = this.positionService.allPositions
  }

}
