import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tour } from '../../models/tour.model';
import { ToursService } from '../../services/tour/tour.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Hotel } from '../../models/hotel.model';
import { HotelService } from '../../services/hotel/hotel.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  showPackageForm: boolean = false;
  showHotelForm:boolean = false;
  dropdownVisible: boolean = false;

  tours: Tour[] = [];
  hotels: Hotel[]=[];
  addPackageForm!: FormGroup;
  addHotelForm!: FormGroup
  btnText2: string = 'Add Hotel';
  btnText: string = 'Add Tour';
  tour_Id!: string;

  constructor(private fb: FormBuilder, 
    private toursService: ToursService,
    private hotelService: HotelService) {}

  ngOnInit(): void {
    this.addPackageForm = this.fb.group({
      tour_Img: ['', [Validators.required]],
      tour_Name: ['', Validators.required],
      tour_Destination: ['', Validators.required],
      tour_Description: ['', Validators.required],
      tour_Price: ['', [Validators.required, Validators.min(0)]],
    });

    this.addHotelForm = this.fb.group({
      hotel_Img: ['', [Validators.required]],
      hotel_Name: ['', Validators.required],
      hotel_Location: ['', Validators.required],
      hotel_Rating: ['', Validators.required],
    });

    this.loadTours();
    this.loadHotels();
  }

  loadTours(): void {
    this.toursService.getAllTours().subscribe(toursArray => {
      this.tours = toursArray;
    });
  }

  
  loadHotels(): void {
    this.hotelService.getAllHotels().subscribe(hotelsArray => {
      this.hotels = hotelsArray;
    });
  }

  addHotel(): void {
    if (this.addHotelForm.valid) {
      const newHotel = this.addHotelForm.value;
      this.hotelService.addHotel(newHotel).subscribe(
        (res: Hotel) => {
          this.hotels.push(res);
          this.addHotelForm.reset();
          this.showHotelForm = false;
        },
        error => {
          console.error('Error adding Hotel:', error);
          // Handle error as needed, e.g., show error message to user
        }
      );
    }
  }

  deleteHotel(hotelId: string): void {
    this.hotelService.deleteHotel(hotelId).subscribe(res => {
      this.hotels = this.hotels.filter(hotels => hotels.hotel_Id !== hotelId);
    });
  }


  addTour(): void {
    if (this.addPackageForm.valid) {
      const newTour = this.addPackageForm.value;
      this.toursService.addTour(newTour).subscribe(
        (res: Tour) => {
          this.tours.push(res);
          this.addPackageForm.reset();
          this.showPackageForm = false;
        },
        error => {
          console.error('Error adding tour:', error);
          // Handle error as needed, e.g., show error message to user
        }
      );
    }
  }

  deleteTour(tourId: string): void {
    this.toursService.deleteTour(tourId).subscribe(res => {
      this.tours = this.tours.filter(tour => tour.tour_Id !== tourId);
    });
  }

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  toggleManageTours(): void {
    this.showPackageForm = !this.showPackageForm;
  }

  toggleManageHotels(): void {
    this.showHotelForm = !this.showHotelForm;
  }

  closeForm(): void {
    this.showPackageForm = false;
  }

  closeFormHotel(): void {
    this.showHotelForm = false;
  }
}
