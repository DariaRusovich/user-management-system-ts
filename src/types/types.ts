export interface IDepartment {
  name: string;
  description: string;
  _id: string;
  picture?: string;
}
export interface IDepartmentsData {
  departments: IDepartments;
  results?: IResults;
}
export interface IDepartments {
  departments: IDepartment[];
}
export interface IResults {
  currentPage: number;
  limit: number;
  sortBy: string;
  total: number;
}

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
