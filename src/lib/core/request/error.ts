enum ErrorType {
  INVALID_REQUEST,
  API,
  AUTHENTICATION,
  PERMISSION,
  CONNECTION,
}

/**
 * BaseError is the base error for every other BaseError
 */
export default class BaseError extends Error {
  constructor() {
    super();
  }

  public static factory(type: ErrorType): BaseError {
    switch (type) {
      case ErrorType.INVALID_REQUEST:
        return new InvalidRequestError();
      case ErrorType.AUTHENTICATION:
        return new AuthenticationError();
      case ErrorType.API:
        return new APIError();
      case ErrorType.PERMISSION:
        return new PermissionError();
      case ErrorType.CONNECTION:
        return new ConnectionError();
      default:
        throw new Error("Unknown error type");
    }
  }
}

/**
 * InvalidRequestError is raised when a request has invalid parameters.
 */
export class InvalidRequestError extends BaseError {}

/**
 * APIError is raised in case no other type covers the problem.
 */
export class APIError extends BaseError {}

/**
 * AuthenticationError is raised when invalid credentials are used to connect.
 */
export class AuthenticationError extends BaseError {}

/**
 * PermissionError is raised when attempting to access a resource without permissions.
 */
export class PermissionError extends BaseError {}

/**
 * ConnectionError is raised when the servers can't be reached.
 */
export class ConnectionError extends BaseError {}
