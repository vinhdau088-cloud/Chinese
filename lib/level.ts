export function getLevel(
xp:number
){

if(xp>=10000){

return "HSK6 Master";

}

if(xp>=5000){

return "HSK5 Advanced";

}

if(xp>=3000){

return "HSK4";

}

if(xp>=1500){

return "HSK3";

}

if(xp>=500){

return "HSK2";

}


return "HSK1 Beginner";

}
