export interface Booking{
  booking_Id: string
  user_Id: string
  user_Email:string
  tour_Id: string
  hotel_Id:string
  booking_Date:string
  isDeleted: number
  
}

export interface AddBooking{
  booking_Id: string
  user_Id: string
  tour_Id: string
  hotel_Id:string
  booking_Date:string
}

export interface AddBookingResponse{
  message:string
}

