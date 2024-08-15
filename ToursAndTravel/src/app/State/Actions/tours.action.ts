import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { AddResponse, AddTour, Tour } from "../../models/tour.model";


export const TourActions= createActionGroup({
    source:'TOUR API',
    events:{
        'add':props<{newTour:AddTour}>(),
        'add success':props<{response:AddResponse}>(),
        'add Failure':props<{message:string}>(),

        'get':emptyProps(),
        'get success':props<{tours:Tour[]}>(),
        'get Failure':props<{message:string}>(),

        'get Tour':props<{id:string}>(),
        'get Specific Tour':props<{tour_Id:string}>(),
    }
})