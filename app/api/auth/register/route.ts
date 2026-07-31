import {NextResponse} from "next/server";


export async function POST(
req:Request
){

const body =
await req.json();


const {
name,
email,
password
}=body;


return NextResponse.json({

success:true,

user:{
name,
email,
password
}

});


}
