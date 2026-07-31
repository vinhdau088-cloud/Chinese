import {NextResponse} from "next/server";


export async function GET(){


const users=[

{
name:"User1",
xp:5000,
level:"HSK5"
},

{
name:"User2",
xp:3000,
level:"HSK4"
}

];


return NextResponse.json(users);


}
