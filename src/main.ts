import * as core from '@actions/core';
import * as io from '@actions/io';
import * as toolbox from '@wealthsimple/actions-toolbox';
import { callAsyncFunction } from './async-function';

process.on('unhandledRejection', handleError);
main().catch(handleError);

async function main(): Promise<void> {
  const script = core.getInput('script', { required: true });
  const result = await callAsyncFunction(
    { require: require, core, io, toolbox },
    script,
  );
  const output = JSON.stringify(result);

  core.setOutput('result', output);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(err: any): void {
  console.error(err);
  core.setFailed(`Unhandled error: ${err}`);
}
