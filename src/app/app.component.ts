import { Component } from '@angular/core';
import { LoginService } from './services-project/login/login.service';

import { NoNavbarService } from './services-project/no-navbar/no-navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'job-now';

  showNavbar: boolean = false

  constructor(private noNavbarService: NoNavbarService){

  }

  ngOnInit(){
    this.noNavbarService.showNavBarEmitter.subscribe(
      show => this.showNavbar = show
    );
  }
}
