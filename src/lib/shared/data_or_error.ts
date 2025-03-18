import type { ZodIssue } from 'zod';

export type NetworkSuccess<Output> = {
  success: true;
  json: Output;
};

export type NetworkError = {
  success: false;
  json: ZodIssue[];
};

/**
 * Instead of throwing, returns a tuple
 *
 * Reduced version of zod's `SafeParseReturnType`
 */
export type NetworkReturn<Output> = NetworkSuccess<Output> | NetworkError;
