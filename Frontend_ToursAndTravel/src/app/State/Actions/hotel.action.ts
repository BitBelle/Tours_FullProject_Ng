import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { AddHotel, AddHotelResponse, Hotel } from "../../models/hotel.model";



export const HotelActions= createActionGroup({
    source:'HOTEL API',
    events:{
        'add':props<{newHotel:AddHotel}>(),
        'add success':props<{response:AddHotelResponse}>(),
        'add Failure':props<{message:string}>(),

        'get':emptyProps(),
        'get success':props<{hotels:Hotel[]}>(),
        'get Failure':props<{message:string}>(),

        'get Hotel':props<{id:string}>(),
        'get Specific Hotel':props<{hotel_Id:string}>(),
    }
})