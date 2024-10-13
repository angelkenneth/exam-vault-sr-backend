import {NextResponse} from "next/server";
import {AppRouteHandlerFn} from "next/dist/server/future/route-modules/app-route/module";

export const GET: AppRouteHandlerFn = (request, context) => {
  const leadId = context.params?.leadId as string;
  return NextResponse.json({
    id: leadId,
    item: 'Mikasa',
  })
}
