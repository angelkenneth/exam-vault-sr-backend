import {NextApiHandler} from "next";
import {NextResponse} from "next/server";

export const GET: NextApiHandler = () => {
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

export const POST: NextApiHandler = () => {
  return NextResponse.json({
    done: true,
  }, {status: 201})
}
