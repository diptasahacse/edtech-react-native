import BaseService from "../../apiServices/baseService";
import { AuthResource } from "../../resources/private";
class AuthService extends BaseService {
  public authResource: AuthResource;
  constructor() {
    super();
    this.authResource = new AuthResource(this.config);
  }
}

export default AuthService;
