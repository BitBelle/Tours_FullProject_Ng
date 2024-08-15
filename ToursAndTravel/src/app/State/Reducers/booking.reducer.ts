import { createReducer, on } from "@ngrx/store"
import { Booking } from "../../models/booking.model"
import { BookingActions } from "../Actions/booking.action"

export interface BookingInterface{
    
    //get user Bookings
    booking_Id:string
    //getAllBookings
    bookings:Booking[]
    bookingsError:string
    bookingLoading:boolean

    //addBooking
    addBookingSuccessMessage:string
    addBookingErrorMessage:string
    addBookingLoading:boolean

}


const initialstate:BookingInterface={
    addBookingErrorMessage:'',
    addBookingLoading:false,
    addBookingSuccessMessage:'',
    bookings:[],
    bookingLoading:false,
    bookingsError:'',
    booking_Id:'',
}

export const bookingReducer= createReducer(
    initialstate,
    on(BookingActions.add, (state)=>{
        return {
            ...state,
            addBookingLoading:true,
            addBookingErrorMessage:'',
            addBookingSuccessMessage:''
        }
    }),
    on(BookingActions.addSuccess, (state, {response})=>{
        return {
            ...state,
            addBookingLoading:false,
            addBookingErrorMessage:'',
            addBookingSuccessMessage:response.message
        }
    }),
    on(BookingActions.addFailure, (state, {message})=>{
        return {
            ...state,
            addBookingLoading:false,
            addBookingErrorMessage:message,
            addBookingSuccessMessage:''
        }
    }),

    on(BookingActions.get, (state,)=>{
        return {
            ...state,
           bookings:[],
           bookingLoading:true,
           bookingsError:''
        }
    }),

    on(BookingActions.getSuccess, (state,{bookings})=>{
        return {
            ...state,
           bookings:bookings,
           bookingLoading:false,
           bookingsError:''
        }
    }),
    on(BookingActions.getFailure, (state,{message})=>{
        return {
            ...state,
           bookings:[],
           bookingLoading:false,
           bookingsError:message
        }
    }),

    on(BookingActions.getBookings, (state,{id})=>{
        return {
            ...state,
           Id:id
        }
    }),

    on(BookingActions.getUserBooking, (state,{booking_Id})=>{
        return {
            ...state,
           booking_Id
        }
    }),
)