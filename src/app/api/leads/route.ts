import {NextResponse} from "next/server";
import {AppRouteHandlerFn} from "next/dist/server/future/route-modules/app-route/module";

export const GET: AppRouteHandlerFn = () => {
  return NextResponse.json({
    items: [
      {
        id: 1,
        name: 'Mikasa',
      },
      {
        id: 2,
        name: 'Levi',
      }
    ],
  })
}

export const POST: AppRouteHandlerFn = () => {
  return NextResponse.json({
    id: 1,
    name: 'Mikasa',
  }, {status: 201})
}
