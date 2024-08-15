import { Component, OnInit } from '@angular/core';
import { ToursComponent } from "../tours/tours.component";
import { HotelsComponent } from "../hotels/hotels.component";
import { SignupComponent } from "../signup/signup.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HotelsComponent, SignupComponent, FormsModule, CommonModule, RouterModule]
})
export class HomeComponent{
  constructor(){}

  // dropdownVisible: boolean = false;

  // toggleDropdown() {
  //   this.dropdownVisible = !this.dropdownVisible
  // }
  

  

  // ngOnInit():void{

  // }
}
