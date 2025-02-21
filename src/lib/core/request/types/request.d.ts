import {AxiosRequestHeaders} from "axios";

export interface Config {
  baseUrl: string | undefined;
  maxRetries: number;
  apiKey?: string;
  publishableApiKey?: string;
}
export type RequestMethod = "DELETE" | "POST" | "GET" | "PUT";

export interface RequestOptions {
  timeout?: number;
  numberOfRetries?: number;
}

export interface IHeaders {
  Authorization?: string;
  "Content-Type"?: string;
  "X-XSRF-TOKEN"?: string;
  'X-Requested-With'?: 'XMLHttpRequest'
}

export interface IReqOpts {
  method: string;
  withCredentials: boolean;
  url: string;
  json: boolean;
  headers?: AxiosRequestHeaders;
  data?: Record<string, unknown>;
}
interface HttpRequestConfig {
  url: string;
  method: string;
  headers: Record<string, string>;
  body?: string;
  timeout?: number;
}
interface HttpRequestDetails {
  url: string;
  method: string;
  headers: Record<string, string>;
}
export interface HTTPResponse {
  status: number
  statusText: string
  headers: Record<string, string, string[]>
  config: HttpRequestConfig
  request?: HttpRequestDetails
}

export type Response<T> = T & {
  response: HTTPResponse
}

export type ResponsePromise<T> = Promise<Response<T>>
