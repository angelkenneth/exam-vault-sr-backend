import {NextResponse} from "next/server";
import {AppRouteHandlerFn} from "next/dist/server/future/route-modules/app-route/module";
import {createDatabaseLead} from "@/lib/leads/database/create";
import {getDatabaseLeadList} from "@/lib/leads/database/list";
import {Lead} from "@/lib/leads/local/lead";
import {postLeadSchema} from "@/lib/leads/validation/post";
import {ListResponse} from "@/lib/shared/api";

export const GET: AppRouteHandlerFn = async () => {
  const result = await getDatabaseLeadList()
  const response: ListResponse<Lead> = {items: result}
  return NextResponse.json(response)
}

export const POST: AppRouteHandlerFn = async (req) => {
  const input = await req.json();
  const {error, data} = postLeadSchema.safeParse(input);
  if (error) {
    return NextResponse.json(error.errors, {status: 400})
  }
  const result = await createDatabaseLead(data)
  return NextResponse.json(result, {status: 201})
}
