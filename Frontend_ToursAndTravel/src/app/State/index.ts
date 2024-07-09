import { AuthInterface } from "./Reducers/auth.reducer";
import { BookingInterface } from "./Reducers/booking.reducer";
import { HotelInterface } from "./Reducers/hotel.reducer";
import { TourInterface } from "./Reducers/tour.reducer";



export interface AppState{
    auth: AuthInterface
    tours:TourInterface
    hotel:HotelInterface
    booking:BookingInterface
}