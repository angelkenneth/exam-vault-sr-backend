import {NextResponse} from "next/server";
import {AppRouteHandlerFn} from "next/dist/server/future/route-modules/app-route/module";
import {getDatabaseLeadById} from "@/app/api/leads/_database/get";

export const GET: AppRouteHandlerFn = async (req, context) => {
  // TODO add validation
  const leadIdStr = context.params?.leadId as string;
  const leadId = Number(leadIdStr);
  const result = await getDatabaseLeadById(leadId)
  return NextResponse.json(result);
}
