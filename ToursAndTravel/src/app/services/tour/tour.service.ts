import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddTour, Tour } from '../../models/tour.model'
import { Observable } from 'rxjs';
import { LoginComponent } from '../../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private readonly BaseURL ="http://localhost:4000/tour"

  retrievedToken = localStorage.getItem('token') as string
  constructor(private http:HttpClient) { }

  addTour(newTour:AddTour):Observable<Tour>{
    return this.http.post<Tour>(this.BaseURL,newTour)
  }

  
  deleteTour(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

  getAllTours(): Observable<Tour[]> {
    console.log('reaching here');
    
    return this.http.get<Tour[]>(this.BaseURL);
  }

  
  getTourById(id: string): Observable<Tour> {
    return this.http.get<Tour>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
        
      })
    });
  }

  
  updateTour(updatedHotel: AddTour, id: string): Observable<{ message: string }> {

    return this.http.patch<{ message: string }>(this.BaseURL + id, updatedHotel, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }



}
