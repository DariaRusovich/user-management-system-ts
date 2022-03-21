export interface ILoginData {
  username?: string;
  password?: string;
  user?: IUser;
}
export interface IUser {
  tokens: IToken;
}
export interface IToken {
  accessToken: string;
  refreshToken: string;
}
export interface IErrorResponse {
 response: IErrorData
}
//response.data.message
export interface IErrorData {
  data: IErrorMessage
}
export interface IErrorMessage {
  message: string
}
