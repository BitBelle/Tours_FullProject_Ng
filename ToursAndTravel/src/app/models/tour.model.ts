export interface Tour {
  tour_Img: string;
  tour_Id:string;
  tour_Name: string;
  tour_Destination: string;
  tour_Description: string;
  tour_Price: number;
  isDeleted:number
  }

  export interface AddTour{
    tour_Img:string,
    tour_Name:string,
    tour_Destination:string,
    tour_Description:string,
    tour_Price:number
}

export interface AddResponse{
  message:string
}

  