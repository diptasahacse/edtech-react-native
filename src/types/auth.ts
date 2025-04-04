import { IStudent } from "./studentCollection";

export interface IAuthState {
  token: string | null;
  authenticated: boolean | null;
}
export interface IRegisterPayload {
  name: string;
  email: string;
  password: string;
}
export interface ISignInPayload {
  email: string;
  password: string;
}

// Register Response
export interface IRegisterResponse {
  success: boolean;
  message_type: string;
  message: string;
  data: {
    access_token: string;
    student: {
      referral_code: string;
      name_en: string;
      email: string;
      id: number;
    };
  };
  code: number;
}
// Signin Response
export interface ISigninResponse {
  success: boolean;
  message_type: string;
  message: string;
  data: {
    access_token: string;
    student: IStudent;
  };
  code: number;
}
