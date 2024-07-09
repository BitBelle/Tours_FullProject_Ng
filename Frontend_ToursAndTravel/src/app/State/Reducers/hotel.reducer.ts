import { createReducer, on } from "@ngrx/store"
import { Hotel } from "../../models/hotel.model"
import { HotelActions } from "../Actions/hotel.action"

export interface HotelInterface{
    //get a hotel
    hotel_Id:string
    //getAllhotels
    hotels:Hotel[]
    hotelsError:string
    hotelLoading:boolean

    //addhotels
    addHotelSuccessMessage:string
    addHotelErrorMessage:string
    addHotelLoading:boolean

}


const initialstate:HotelInterface={
    addHotelErrorMessage:'',
    addHotelLoading:false,
    addHotelSuccessMessage:'',
    hotels:[],
    hotelLoading:false,
    hotelsError:'',
    hotel_Id:'',
}

export const tourReducer= createReducer(
    initialstate,
    on(HotelActions.add, (state)=>{
        return {
            ...state,
            addHotelLoading:true,
            addHotelErrorMessage:'',
            addHotelSuccessMessage:''
        }
    }),
    on(HotelActions.addSuccess, (state, {response})=>{
        return {
            ...state,
            addHotelLoading:false,
            addHotelErrorMessage:'',
            addHotelSuccessMessage:response.message
        }
    }),
    on(HotelActions.addFailure, (state, {message})=>{
        return {
            ...state,
            addHotelLoading:false,
            addHotelErrorMessage:message,
            addHotelSuccessMessage:''
        }
    }),

    on(HotelActions.get, (state,)=>{
        return {
            ...state,
           hotels:[],
           hotelLoading:true,
           hotelsError:''
        }
    }),

    on(HotelActions.getSuccess, (state,{hotels})=>{
        return {
            ...state,
           hotels:hotels,
           hotelLoading:false,
           hotelsError:''
        }
    }),
    on(HotelActions.getFailure, (state,{message})=>{
        return {
            ...state,
           hotels:[],
           hotelLoading:false,
           hotelsError:message
        }
    })

)