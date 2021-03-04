import * as core from '@actions/core';
import * as io from '@actions/io';

const AsyncFunction = Object.getPrototypeOf(async () => null).constructor;

type AsyncFunctionArguments = {
  core: typeof core;
  io: typeof io;
  require: NodeRequire;
};

export function callAsyncFunction<T>(
  args: AsyncFunctionArguments,
  source: string,
): Promise<T> {
  const fn = new AsyncFunction(...Object.keys(args), source);
  return fn(...Object.values(args));
}
