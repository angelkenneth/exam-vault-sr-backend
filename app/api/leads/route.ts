import {NextApiHandler} from "next";
import {NextResponse} from "next/server";

export const GET: NextApiHandler = () => {
  return NextResponse.json({
    items: ['Mikasa', 'Levi'],
  })
}

export const POST: NextApiHandler = () => {
  return NextResponse.json({
    done: true,
  }, {status: 201})
}
