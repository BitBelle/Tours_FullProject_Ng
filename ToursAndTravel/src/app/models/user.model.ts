export interface User{
  user_Name: string
  password_Hash: string,
  user_Email: string

}
export interface SignUpResponse{
  message: string
}

export interface LoginUser{
  user_Name: string,
  password_Hash: string
}


export interface LogInResponse{
  message: string,
  token: string,

}