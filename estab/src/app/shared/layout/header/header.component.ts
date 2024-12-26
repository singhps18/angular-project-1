import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  {

  // logIN:boolean=false;
  // langauge:string='english'
  // userRole!:string;
  // constructor(
  //   private routes:Router
  // ){

  // }
  // ngOnInit(): void {
    
  // }




}
