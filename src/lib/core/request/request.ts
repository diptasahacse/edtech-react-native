import axios, {
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
// import { v4 as uuidv4 } from "uuid";
import {
  Config,
  IHeaders,
  IReqOpts,
  RequestMethod,
  RequestOptions,
} from "./types/request";

const defaultConfig = {
  maxRetries: 0,
  baseUrl: "",
  withXSRFToken: true,
};

export class Client {
  private axiosClient: AxiosInstance;
  private config: Config;

  constructor(config: Config) {
    this.axiosClient = this.createClient({ ...defaultConfig, ...config });
    this.config = { ...defaultConfig, ...config };
  }

  cleanAndTransformHeaders(headers: RequestOptions): Record<string, string> {
    return Object.keys(headers).reduce(
      (acc, key) => {
        const value = headers[key as keyof RequestOptions];
        if (value !== undefined) {
          acc[key] = typeof value === "number" ? value.toString() : value;
        }
        return acc;
      },
      {} as Record<string, string>
    );
  }

  normalizeHeaders(obj: Record<string, string>): Record<string, string> {
    if (!(obj && typeof obj === "object")) {
      return obj;
    }

    return Object.keys(obj).reduce(
      (result: Record<string, string>, header: string) => {
        result[this.normalizeHeader(header)] = obj[header];
        return result;
      },
      {}
    );
  }

  normalizeHeader(header: string): string {
    return header
      .split("-")
      .map(
        (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
      )
      .join("-");
  }

  setHeaders(
    userHeaders: RequestOptions,
    method: RequestMethod,
    customHeaders: IHeaders
  ): AxiosRequestHeaders {
    const defaultHeaders: Record<string, string> = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    // if (this.config.maxRetries > 0 && method === "POST") {
    //   defaultHeaders["Idempotency-Key"] = uuidv4();
    // }

    const headers = Object.assign(
      {},
      defaultHeaders,
      this.normalizeHeaders(this.cleanAndTransformHeaders(userHeaders)),
      customHeaders
    ) as AxiosRequestHeaders;

    return headers;
  }

  createClient(config: Config): AxiosInstance {
    const client = axios.create({
      baseURL: config.baseUrl,
      withCredentials: true,
      withXSRFToken: true,
    });
    return client;
  }

  async request<T = Record<string, unknown>, P = Record<string, unknown>, R = Record<string, unknown>>(
    method: RequestMethod,
    path: string,
    payload: P = {} as P,
    options: RequestOptions = {},
    customHeaders: IHeaders,
    withCredentials: boolean = true
  ): Promise<{ data: T; response: R & AxiosResponse }> {
    const reqOpts: IReqOpts = {
      method,
      withCredentials: withCredentials,
      url: path,
      json: true,
      headers: this.setHeaders(options, method, customHeaders),
    };

    if (["POST", "DELETE", "PUT"].includes(method)) {
      reqOpts["data"] = payload as Record<string, unknown>;
    }

    const { data, ...response } = await this.axiosClient(reqOpts);
    return { data, response } as { data: T; response: R & AxiosResponse };
  }
}
