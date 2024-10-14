import {NextResponse} from "next/server";
import {AppRouteHandlerFn} from "next/dist/server/future/route-modules/app-route/module";
import {createDatabaseLead} from "@/app/api/leads/_database/create";
import {getDatabaseLeadList} from "@/app/api/leads/_database/list";
import {ListResponse} from "@/app/lib/api";
import {Lead} from "@/app/api/leads/_local/lead";
import {postLeadSchema} from "@/app/api/leads/_validation/post";

export const GET: AppRouteHandlerFn = async () => {
  const result = await getDatabaseLeadList()
  const response: ListResponse<Lead> = {items: result}
  return NextResponse.json(response)
}

export const POST: AppRouteHandlerFn = async (req) => {
  const {error, data} = postLeadSchema.safeParse(await req.json());
  if (error) {
    return NextResponse.json(error.errors, {status: 400})
  }
  const result = await createDatabaseLead(data)
  return NextResponse.json(result, {status: 201})
}
