import {NextResponse} from "next/server";
import {AppRouteHandlerFn} from "next/dist/server/future/route-modules/app-route/module";
import {getDatabaseLeadById} from "@/lib/leads/database/get";
import {leadByIdSchema} from "@/lib/leads/validation/get";
import {ZodIssue} from "zod";

export const GET: AppRouteHandlerFn = async (req, context) => {
  const {error, data} = leadByIdSchema.safeParse(context.params)
  if (error) {
    return NextResponse.json(error.errors, {status: 400});
  }
  const leadId = data.leadId;
  const result = await getDatabaseLeadById(leadId)
  if (!result) {
    const errors: ZodIssue[] = [
      {
        code: 'custom',
        path: [],
        message: `Lead with id (${leadId}) does not exists`,
      }
    ]
    return NextResponse.json(errors, {status: 404});
  }
  return NextResponse.json(result);
}
