import { Component, OnInit } from '@angular/core';
import { Curriculum } from './../../models-project/curriculum';
import { CurriculumService } from 'src/app/services-project/curriculum/curriculum.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-area-result',
  templateUrl: './company-area-result.component.html',
  styleUrls: ['./company-area-result.component.css']
})
export class CompanyAreaResultComponent implements OnInit {

  listCurriculum:Curriculum[]
  interest:string;

  constructor(private curriculumService:CurriculumService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.interest=this.route.snapshot.params["interest"]
    this.curriculumService.getByInterest(this.interest).toPromise().then(result=>this.listCurriculum=result)
  }
}
