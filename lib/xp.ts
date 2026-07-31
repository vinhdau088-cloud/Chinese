import {getLevel} from "./level";


export function addXP(
current:number,
amount:number
){

const xp =
current + amount;


return {

xp,

level:getLevel(xp)

};

}
