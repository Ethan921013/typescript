//심볼로 인하여 생성된 값은 고유하며 수정불가하다. 접근성쪽에 많이 활용
console.log(Symbol("foo") === Symbol("foo"));

const sym = Symbol();

const obj = {
    [sym] : "value",
};

obj[sym];
