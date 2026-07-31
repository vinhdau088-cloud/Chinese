export default function Progress({
value
}:{
value:number;
}){

return(

<div className="
w-full
bg-gray-200
rounded-full
h-3
">

<div
style={{
width:`${value}%`
}}
className="
h-3
bg-purple-600
rounded-full
"
/>

</div>

)

}
