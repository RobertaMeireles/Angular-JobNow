import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-curriculum',
  templateUrl: './search-curriculum.component.html',
  styleUrls: ['./search-curriculum.component.css']
})
export class SearchCurriculumComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  search(interest:HTMLInputElement){
      this.router.navigate(['consult-apply',interest.value])
  }
}
