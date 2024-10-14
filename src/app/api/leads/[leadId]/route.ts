import {NextResponse} from "next/server";
import {AppRouteHandlerFn} from "next/dist/server/future/route-modules/app-route/module";
import {getDatabaseLeadById} from "@/app/api/leads/_database/get";
import {leadByIdSchema} from "@/app/api/leads/_validation/get";

export const GET: AppRouteHandlerFn = async (req, context) => {
  const { error, data } = leadByIdSchema.safeParse(context.params)
  if (error){
    return NextResponse.json(error.errors, {status: 400});
  }
  const result = await getDatabaseLeadById(data.leadId)
  return NextResponse.json(result);
}
