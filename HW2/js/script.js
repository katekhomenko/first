//Task 1
function factorial(n) {
	if (n!=1){
		return n*factorial(n-1);
	}else {
		return n;
	}
}
console.log(factorial(5));



//Task 2


/*function getMinSub(arr) {
  var minSum;
  var partialSum = 0;
  for (var i = 0; i < arr.length; i++) {
    partialSum += arr[i];
    if (minSum > partialSum) {
    	minSum=partialSum
    }

    if (partialSum > 0) {
    	return arr = [];
    } 
  }
  return arr;
}

alert( getMinSub([-1, -2, -3, 4, -2, 6]) );*/