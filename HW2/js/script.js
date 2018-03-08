// Task 1
function factorial(n) {
	if (n!=1){
		return n*factorial(n-1);
	}else {
		return n;
	}
}
console.log(factorial(5));



//Task 2


function getMinSub(arr) {
  var minSum = 0;
  var partialSum = 0;
  var resultArr = [];
  var partialArr= [];
  for (var i = 0; i < arr.length; i++) {
    partialSum += arr[i];
    partialArr.push(arr[i]);
    if (minSum >= partialSum) {
    	minSum=partialSum;
      resultArr = partialArr.slice();
    }

    if (partialSum > 0) {
      partialSum = 0;
      partialArr = [];
      
    } 
  }
  return resultArr;
}

getMinSub([-5, 1, -3, 3, 5, -6]);



