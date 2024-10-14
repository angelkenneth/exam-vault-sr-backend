import type {ZodIssue} from "zod";

export type NetworkSuccess<Output> = {
  success: true;
  json: Output;
};

export type NetworkError = {
  success: false;
  json: ZodIssue[];
};

/**
 * Instead of throwing, gives a tupled
 *
 * Reduced version of zod's `SafeParseReturnType`
 */
export type NetworkReturn<Output> = NetworkSuccess<Output> | NetworkError;
