import * as core from '@actions/core';
import * as io from '@actions/io';
import * as toolbox from '@wealthsimple/actions-toolbox';

const AsyncFunction = Object.getPrototypeOf(async () => null).constructor;

type AsyncFunctionArguments = {
  core: typeof core;
  io: typeof io;
  require: NodeRequire;
  toolbox: typeof toolbox;
};

export function callAsyncFunction<T>(
  args: AsyncFunctionArguments,
  source: string,
): Promise<T> {
  const fn = new AsyncFunction(...Object.keys(args), source);
  return fn(...Object.values(args));
}
