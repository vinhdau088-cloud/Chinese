import {NextResponse} from "next/server";


export async function GET(){


const users=[

{
name:"Demo",
role:"USER"
}

];


return NextResponse.json(users);


}
