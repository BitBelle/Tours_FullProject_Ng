import { Injectable } from '@angular/core';
import { Booking, AddBooking } from '../../models/booking.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private readonly BaseURL = "http://localhost:4000/booking"

  retrievedToken = localStorage.getItem('token') as string

  constructor(private http: HttpClient) { }

  addBooking(newBooking: AddBooking): Observable<Booking> {
    return this.http.post<Booking>(this.BaseURL, newBooking, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    })
  }

  deleteBooking(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

  

  getAllBookings(id: string): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.BaseURL + 'user/' + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }


  getBookingById(id: string): Observable<Booking> {
    return this.http.get<Booking>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

  updateBooking(updatedBooking: AddBooking, id: string): Observable<{ message: string }> {

    return this.http.patch<{ message: string }>(this.BaseURL + id, updatedBooking, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

}


