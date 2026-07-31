export default function Badge({
text
}:{
text:string;
}){

return(

<span
className="
px-4
py-1
rounded-full
bg-purple-100
text-purple-700
text-sm
font-semibold
"
>

{text}

</span>

)

}
