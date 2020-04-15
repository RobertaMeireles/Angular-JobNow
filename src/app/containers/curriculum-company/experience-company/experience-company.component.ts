import { Component, OnInit, Input} from '@angular/core';
import { Experience } from 'src/app/models-project/curriculum';

@Component({
  selector: 'app-experience-company',
  templateUrl: './experience-company.component.html',
  styleUrls: ['./experience-company.component.css']
})
export class ExperienceCompanyComponent implements OnInit {

  constructor() { }

  @Input() inputExp:Experience=null;

  ngOnInit(): void {
  }

}
