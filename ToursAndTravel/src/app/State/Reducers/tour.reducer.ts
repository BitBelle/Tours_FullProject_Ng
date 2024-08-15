import { createReducer, on } from "@ngrx/store"
import { Tour } from "../../models/tour.model"
import { TourActions } from "../Actions/tours.action"

export interface TourInterface{
    user_Id: string
    //get a tour
    tour_Id:string
    //getAllTours
    tours:Tour[]
    toursError:string
    tourLoading:boolean

    //addTours
    addTourSuccessMessage:string
    addTourErrorMessage:string
    addTourLoading:boolean

}


const initialstate:TourInterface={
    addTourErrorMessage:'',
    addTourLoading:false,
    addTourSuccessMessage:'',
    tours:[],
    tourLoading:false,
    toursError:'',
    tour_Id:'',
    user_Id:''
}

export const tourReducer= createReducer(
    initialstate,
    on(TourActions.add, (state)=>{
        return {
            ...state,
            addTourLoading:true,
            addTourErrorMessage:'',
            addTourSuccessMessage:''
        }
    }),
    on(TourActions.addSuccess, (state, {response})=>{
        return {
            ...state,
            addTourLoading:false,
            addTourErrorMessage:'',
            addTourSuccessMessage:response.message
        }
    }),
    on(TourActions.addFailure, (state, {message})=>{
        return {
            ...state,
            addTourLoading:false,
            addTourErrorMessage:message,
            addTourSuccessMessage:''
        }
    }),

    on(TourActions.get, (state,)=>{
        return {
            ...state,
           tours:[],
           tourLoading:true,
           toursError:''
        }
    }),

    on(TourActions.getSuccess, (state,{tours})=>{
        return {
            ...state,
           tours:tours,
           tourLoading:false,
           toursError:''
        }
    }),
    on(TourActions.getFailure, (state,{message})=>{
        return {
            ...state,
           tours:[],
           tourLoading:false,
           toursError:message
        }
    }),

    on(TourActions.getTour, (state,{id})=>{
        return {
            ...state,
           Id:id
        }
    }),

)