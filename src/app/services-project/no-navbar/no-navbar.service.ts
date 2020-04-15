import { Injectable } from '@angular/core';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Routes, Route, Router } from '@angular/router';
import { User } from '../../models-project/users';

@Injectable({
  providedIn: 'root'
})
export class NoNavbarService {

  showNavbar:boolean = true;

  changeShowNavbar(){
    this.showNavbar = !this.showNavbar
  }

  userAuthenticated: boolean = false;

  showNavBarEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { 

  }

}
