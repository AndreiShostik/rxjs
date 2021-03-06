export interface TimeoutError extends Error {
}

export interface TimeoutErrorCtor {
  new(): TimeoutError;
}

function TimeoutErrorImpl(this: any) {
  Error.call(this);
  this.message = 'Timeout has occurred';
  this.name = 'TimeoutError';
  return this;
}

TimeoutErrorImpl.prototype = Object.create(Error.prototype);

/**
 * An error thrown when duetime elapses.
 *
 * @see {@link operators/timeout}
 *
 * @class TimeoutError
 */
export const TimeoutError: TimeoutErrorCtor = TimeoutErrorImpl as any;
