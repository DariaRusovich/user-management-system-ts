export interface IDepartment {
  name: string;
  description: string;
  _id: string;
  picture?: string;
}
export interface ILoginData {
  username?: string;
  password?: string;
  user?: IUser
}
export interface IUser {
  tokens: IToken
}
export interface IToken {
  accessToken: string,
  refreshToken: string
}