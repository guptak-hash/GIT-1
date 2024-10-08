// forEach

let arr=[1,2,3,4];

function forEachCustom(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

function callback(a,b,A){
  return console.log(a, b);
}


  let result = forEachCustom(arr,callback);