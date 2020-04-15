import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurriculumService } from './../../services-project/curriculum/curriculum.service';
import { Curriculum } from 'src/app/models-project/curriculum';

@Component({
  selector: 'app-curriculum-company',
  templateUrl: './curriculum-company.component.html',
  styleUrls: ['./curriculum-company.component.css']
})
export class CurriculumCompanyComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private curriculumService:CurriculumService) { }

  userId:number;
  currentCurriculum:Curriculum

  ngOnInit(): void {
    this.userId= this.route.snapshot.params['id']
    this.curriculumService.getCurriculum(this.userId).toPromise().then(result=>{
      this.currentCurriculum = result[0]
    })
  }

}
