import config, { Config } from 'constant/config';
import path, { Path } from 'constant/path';
import error, { CustomError } from 'constant/error';
import loading, { CustomLoading } from 'constant/loading';

const deepFreeze = (target: unknown) => {
  if (target && typeof target === 'object') {
    const newObj: { [key: string]: unknown } = {};

    Object.entries(target).forEach(([key, value]) => {
      newObj[key] = deepFreeze(value);
    });

    return newObj;
  }

  return target;
};

export const CONFIG = deepFreeze(config) as Config;
export const PATH = deepFreeze(path) as Path;
export const ERROR = deepFreeze(error) as CustomError;
export const LOADING = deepFreeze(loading) as CustomLoading;
