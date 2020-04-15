import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from './../../services-project/position/position.service';


@Component({
  selector: 'app-all-apply',
  templateUrl: './all-apply.component.html',
  styleUrls: ['./all-apply.component.css']
})
export class AllApplyComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private positionService:PositionService){ }

  idJob:number;
  beResults:any;

  ngOnInit(): void {
    this.idJob= this.route.snapshot.params['id']
    console.log(this.idJob)
    this.positionService.getUserAndPosition(this.idJob).toPromise().then(result=>
      {
        this.beResults = result;
        console.log(result)
      }
    )

  }
}
