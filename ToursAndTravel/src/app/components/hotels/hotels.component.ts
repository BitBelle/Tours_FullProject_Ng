import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { HotelService } from '../../services/hotel/hotel.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})


export class HotelsComponent{
  Hotels: Hotel[] = []
  HotelById: Hotel[] = [];

  hotel_Id!: string
  hotel_Name!: string
  hotel_Location!: string
  hotel_Rating!: string
  user!: string;

  constructor(
    private fb: FormBuilder, 
    private hotelService:HotelService,
    private router:Router
  ){}

  ngOnInit(): void{
    const userString = localStorage.getItem('currentUser')
    if (userString) {
      this.user = JSON.parse(userString);
    }

    this.hotelService.getAllHotels().subscribe((hotels: Hotel[]) => {
      this.Hotels = hotels
      console.log(this.Hotels);
      
    })
  }


}
