/**
 * expended error object for express route purposes
 * @param message the error message
 * @param statusCode the error status code
 */
module.exports = class ServerError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = /^4/.test(`${statusCode}`) ? 'failure' : 'error'; // indicated if it's validation error or not
    this.isPlaned = true; // indicates if this error was generated by us or not
    // representing the location in the code at which the error was thrown/returned.
    Error.captureStackTrace(this, this.constructor);
  }
};
