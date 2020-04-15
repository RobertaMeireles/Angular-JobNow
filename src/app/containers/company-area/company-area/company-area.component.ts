import { Component, OnInit, ViewChild } from '@angular/core';
import { CurriculumService } from 'src/app/services-project/curriculum/curriculum.service';
import { Curriculum } from 'src/app/models-project/curriculum';

@Component({
  selector: 'app-company-area',
  templateUrl: './company-area.component.html',
  styleUrls: ['./company-area.component.css']
})
export class CompanyAreaComponent implements OnInit {

  allCurriculum:Curriculum;
  filteredCurriculuns:Curriculum[];

  constructor(private curriculumService:CurriculumService) { }

  ngOnInit(): void {
  }

}
