export interface Hotel {
  hotel_Id: string
  hotel_Img:string
  hotel_Name: string
  hotel_Location: string
  hotel_Rating: number

}

export interface AddHotel{
  hotel_Img:string
  hotel_Name: string
  hotel_Location: string
  hotel_Rating: number
}

export interface AddHotelResponse{
  message: string
}

