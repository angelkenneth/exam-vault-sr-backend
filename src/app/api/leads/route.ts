import {NextResponse} from "next/server";
import {AppRouteHandlerFn} from "next/dist/server/future/route-modules/app-route/module";
import {PostLead} from "@/app/api/leads/_network/post";
import {createDatabaseLead} from "@/app/api/leads/_database/create";
import {getDatabaseLeadList} from "@/app/api/leads/_database/list";
import {ListResponse} from "@/app/lib/api";
import {Lead} from "@/app/api/leads/_local/lead";

export const GET: AppRouteHandlerFn = async () => {
  const result = await getDatabaseLeadList()
  const response: ListResponse<Lead> = { items: result }
  return NextResponse.json(response)
}

export const POST: AppRouteHandlerFn = async (req) => {
  // TODO add validation
  const body: PostLead = await req.json();
  const result = await createDatabaseLead(body)
  return NextResponse.json(result, {status: 201})
}
