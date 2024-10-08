// use of reduce


let input = [5,10,15,20];

let output = input.reduce(fn,0);

function fn(acc,e){
    return acc+e;
}

console.log(output);