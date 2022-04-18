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
export interface IError {
  data: IErrorMessage
}
export interface IErrorMessage {
  message: string
}
