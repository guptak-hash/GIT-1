// use of filter()

let input = [1,2,3,4,5,6];

let output = input.filter(fn);

function fn(e){
    if(e%2===0){
        return true;
    }
    else{
        return false;
    }
}

console.log(output);