import BaseError from "../request/error";
import { Client } from "../request/request";
import { Config } from "../request/types/request";

export default class BaseResource {
  public client: Client;
  public errors: BaseError;

  constructor(config: Config) {
    this.client = new Client(config);
    this.errors = new BaseError();
  }
}
