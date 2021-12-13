declare const maybe : unknown;

// const aNumber:number = maybe;

// if문안에서 자동으로 추측해준다. 타입추론
if(maybe === true){
    const aBoolean:boolean = maybe;
}

if(typeof maybe === "string"){
    const aString : string = maybe;
}