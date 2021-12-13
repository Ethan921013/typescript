function error(message:string):never{
    throw new Error(message);
}

function fail(){
    return error("Fail");
}

function infiniteLoop():never{
    while(true){}
}

let a1 : string = "hello";

if(typeof a1 !== "string"){
    //string이 아니면 never
    a1;
}

type indexable<T> = T extends string ? T & { [index:string]:any } : never;
type ObjectIndexable = indexable<{}>;
// const b:indexable<{}> = ""; 막아준다.