import BaseResource from "../baseResource";
import {
  IRegisterPayload,
  IRegisterResponse,
  ISignInPayload,
  ISigninResponse,
} from "@/src/types/auth";
class AuthResource extends BaseResource {
  register(payload: IRegisterPayload, customHeaders = {}) {
    const path = `/api/register`;
    return this.client.request<IRegisterResponse, IRegisterPayload>(
      "POST",
      path,
      payload,
      {},
      customHeaders
    );
  }
  signin(payload: ISignInPayload, customHeaders = {}) {
    const path = `/api/login`;
    return this.client.request<ISigninResponse, ISignInPayload>(
      "POST",
      path,
      payload,
      {},
      customHeaders
    );
  }
}

export default AuthResource;
