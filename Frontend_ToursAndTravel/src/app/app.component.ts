import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToursComponent } from "./components/tours/tours.component";
import { HomeComponent } from "./components/home/home.component";
import { SignupComponent } from "./components/signup/signup.component";
import { HeaderComponent } from "./components/header/header.component";
import { HttpClient } from '@angular/common/http';
import { AdminComponent } from "./components/admin/admin.component";
import { BookingsComponent } from "./components/bookings/bookings.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ToursComponent, HomeComponent, SignupComponent, HeaderComponent, AdminComponent, BookingsComponent]
})


export class AppComponent {
  title = 'ToursAndTravel';
}
