import { createFeatureSelector, createSelector } from "@ngrx/store"
import { TourInterface } from "../Reducers/tour.reducer"



const toursFeatureSelector= createFeatureSelector<TourInterface>('tours')


export const toursSelector= createSelector(toursFeatureSelector, (state)=>state.tours)
export const toursIdSelector= createSelector(toursFeatureSelector, (state)=>state.tour_Id)
export const toursUserIdSelector= createSelector(toursFeatureSelector, (state)=>state.user_Id)
//custom
export const tourselector= createSelector(
    toursSelector,
    toursIdSelector,
    (tours,Id)=>tours.find(x=>x.tour_Id===Id)
)

export const userTourSelector= createSelector(
    toursSelector,
    toursUserIdSelector,
    (tours,Id)=>tours.filter(x=>x.tour_Id===Id)
)