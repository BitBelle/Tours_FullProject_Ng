import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { AddBooking, AddBookingResponse, Booking } from "../../models/booking.model";



export const BookingActions= createActionGroup({
    source:'BOOKING API',
    events:{
        'add':props<{newBooking:AddBooking}>(),
        'add success':props<{response:AddBookingResponse}>(),
        'add Failure':props<{message:string}>(),

        'get':emptyProps(),
        'get success':props<{bookings:Booking[]}>(),
        'get Failure':props<{message:string}>(),

        'get Bookings':props<{id:string}>(),
        'get User Booking':props<{booking_Id:string}>(),
    }
})