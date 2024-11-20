import connectDb from "@/lib/db/connectDb";
import { userModal } from "@/lib/models/Users";

export async function GET(request) {
  await connectDb();
  const users = await userModal.find();
  return Response.json(
    {
      msg: "Users Fetched Successfully",
      users,
    },
    { status: 200 }
  );
}

export async function POST(request) {
  await connectDb();
  const obj = await request.json();
  let newUser = new userModal(obj);
  await newUser.save();
  return Response.json(
    {
      msg: "Users Added Successfully",
      user: newUser,
    },
    { status: 201 }
  );
}

export async function PUT(request) {}

export async function DELETE(request) {}
