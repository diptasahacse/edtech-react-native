import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import {
  IAuthState,
  IRegisterPayload,
  IRegisterResponse,
  ISignInPayload,
  ISigninResponse,
} from "@/src/types/auth";
import axios from "axios";
import { envManager } from "@/src/envManager";
const TOKEN_KEY = "token_key";
interface IAuthProps {
  authState?: IAuthState;
  onRegister?: (payload: IRegisterPayload) => Promise<any>;
  onLogin?: (payload: ISignInPayload) => Promise<any>;
  onLogout?: () => Promise<any>;
}
const AuthContext = createContext<IAuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<IAuthState>({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setAuthState({
          authenticated: true,
          token: token,
        });
      }
    };
    loadToken()
  }, []);

  const setToken = async (token: string) => {
    setAuthState({
      authenticated: true,
      token: token,
    });
    // set default header
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  };

  //   Register
  const register = async (payload: IRegisterPayload) => {
    try {
      const res = await axios.post<IRegisterResponse>(
        `${envManager.BASE_URL}/api/register`,
        payload
      );

      if (res.data.data.access_token) {
        await setToken(res.data.data.access_token);
      }
      return res;
    } catch (error) {
      return { error: true, message: "Error" };
    }
  };

  //   Signin
  const signin = async (payload: ISignInPayload) => {
    try {
      const res = await axios.post<ISigninResponse>(
        `${envManager.BASE_URL}/api/login`,
        payload
      );
      if (res.data.data.access_token) {
        await setToken(res.data.data.access_token);
      }
      return res;
    } catch (error) {
      return { error: true, message: "Error" };
    }
  };

  //   Logout
  const logout = async () => {
    // Delete token from storage
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    // Reset Auth State
    setAuthState({
      authenticated: null,
      token: null,
    });
    // Remove default header
    axios.defaults.headers.common["Authorization"] = "";
  };

  const value: IAuthProps = {
    onRegister: register,
    onLogin: signin,
    onLogout: logout,
    authState,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
