/* eslint-disable @typescript-eslint/no-explicit-any */

import { callAsyncFunction } from './async-function';

describe('callAsyncFunction', () => {
  it('calls the function with its arguments', async () => {
    const result = await callAsyncFunction({ foo: 'bar' } as any, 'return foo');

    expect(result).toEqual('bar');
  });

  it('throws on ReferenceError', async () => {
    await expect(callAsyncFunction({} as any, 'proces')).rejects.toThrow(
      ReferenceError,
    );
  });

  it('can access process', async () => {
    expect(() => callAsyncFunction({} as any, 'process')).not.toThrow(
      ReferenceError,
    );
  });

  it('can access console', async () => {
    expect(() => callAsyncFunction({} as any, 'console')).not.toThrow(
      ReferenceError,
    );
  });
});
