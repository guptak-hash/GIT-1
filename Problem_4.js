// filter, map, reduce

let input = [1,2,3,4,5];

let output = input.filter(e=>e%2===0?true:false).map(e=>e*e).reduce(fn2,0);



function fn2(acc,e){
    return acc+e;
}

console.log(output);