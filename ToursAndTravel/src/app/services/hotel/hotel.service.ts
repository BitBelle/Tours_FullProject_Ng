import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel, AddHotel } from '../../models/hotel.model';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private readonly BaseURL = "http://localhost:4000/hotel"


  constructor(private http: HttpClient) { }

  retrievedToken = localStorage.getItem('token') as string;

  addHotel(newHotel:AddHotel):Observable<Hotel>{
    return this.http.post<Hotel>(this.BaseURL,newHotel)
  }


  deleteHotel(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }


  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.BaseURL);
  }

  getSpecificHotel(id: string): Observable<Hotel> {
    return this.http.get<Hotel>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }


  updateHotel(updatedHotel: AddHotel, id: string): Observable<{ message: string }> {

    return this.http.patch<{ message: string }>(this.BaseURL + id, updatedHotel, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }





}
