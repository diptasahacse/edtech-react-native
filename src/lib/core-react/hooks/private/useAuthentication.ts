import { useState } from "react";
import { useService } from "../../contexts";
import { IRegisterPayload, ISignInPayload } from "@/src/types/auth";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const { authService } = useService();
  const register = async (payload: IRegisterPayload) => {
    try {
      setLoading(true);
      const response = await authService.authResource.register(payload);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return {
    register,
    loading,
  };
};
export const useSignin = () => {
  const [loading, setLoading] = useState(false);
  const { authService } = useService();
  const signin = async (payload: ISignInPayload) => {
    try {
      setLoading(true);
      const response = await authService.authResource.signin(payload);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return {
    signin,
    loading,
  };
};
