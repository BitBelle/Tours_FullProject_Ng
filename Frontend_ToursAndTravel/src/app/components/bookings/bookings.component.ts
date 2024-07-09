import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tour } from '../../models/tour.model';
import { BookingService } from '../../services/booking/booking.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AddBooking } from '../../models/booking.model';
import { HotelService } from '../../services/hotel/hotel.service';
import { ToursService } from '../../services/tour/tour.service';
import { AuthenticationService } from '../../services/user/auth.service';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterModule],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  tour!: Tour;
  bookingForm!: FormGroup;
  hotels:any[] = []
  tours:any[] = []

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private hotelService: HotelService,
    private tourService: ToursService,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      tour_Name: [{ value: '', disabled: true }, Validators.required],
      user_Name: ['', Validators.required],
      user_Email: ['', [Validators.required, Validators.email]],
      hotel_Id: ['', Validators.required],
      booking_Date: ['', Validators.required]
    });

    // Fetch tour details from route params (or service call if needed)
    this.route.params.subscribe(params => {
      const tourId = params['id']; 
      this.tour = {
        tour_Img: 'tour_Img',
        tour_Name: 'tour_Name',
        tour_Destination: 'tour_Destination',
        tour_Description: 'tour_Description',
        tour_Price: 0,
        tour_Id: tourId,
        isDeleted: 0
      };

      // Setting initial tour name in form
      this.bookingForm.patchValue({
        tour_Name: this.tour.tour_Name
      });
    });

    // list of tours
    this.tourService.getAllTours().subscribe({
      next: (tours: any[]) => {
        this.tours = tours;
      },
      error: (error: any) => {
        console.error('Error fetching tours:', error);
      }
    });

    // Fetch the list of hotels
    this.hotelService.getAllHotels().subscribe({
      next: (hotels) => {
        this.hotels = hotels;
      },
      error: (error) => {
        console.error('Error fetching hotels:', error);
      }
    });
  }

  bookTour(): void {
    if (this.bookingForm.valid) {
      const newBooking: AddBooking = {
        booking_Id: '',
        user_Id: '', 
        tour_Id: this.tour.tour_Id,
        hotel_Id: '',
        booking_Date: this.bookingForm.value.booking_Date
        
      };

      
      this.bookingService.addBooking(newBooking).subscribe({
        next: (response) => {
          console.log('Booking successful:', response);
          this.router.navigate(['']);
        },
        error: (error) => {
          console.error('Error booking tour:', error);
        }
      });
    } else {
      // Marking form fields as touched to display validation errors
      this.bookingForm.markAllAsTouched();
    }
  }
}
