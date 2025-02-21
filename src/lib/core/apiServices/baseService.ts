import { envManager } from "@/src/envManager";
import { Config } from "../request/types/request";

class BaseService {
  public config: Config;

  constructor() {
    this.config = {
      baseUrl: envManager.BASE_URL,
      apiKey: "",
      maxRetries: 0,
      publishableApiKey: "",
    };
  }
}

export default BaseService;
