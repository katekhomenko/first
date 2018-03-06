//Task 1

function reverse(string) {
	var arr = string.split('');
	arr = arr.reverse() ;
	return arr.join('');
}

//Task 2 1-st edition

function camelize(string)  {
  
var arr = string.split('');

arr[0] = arr(/^\w/).toUpperCase();
arr[string.length-1] = arr[string.length-1].toUpperCase();

for(i=0; i<arr.length; i++) {
  if(arr[i]===' ') {
  	arr[i+1] = arr[i+1].toUpperCase();
  }
  if(arr[i]===' ') {
  	arr[i-1] = arr[i-1].toUpperCase();
  }
}
return arr.join('');
}

//Task 2 2-nd edition

function camelize(string) {
	  arr=string.replace(/\D(?=\s)|(^\D)|(\D$)|(\s\D)/gi, function(newString) {
		return newString.toUpperCase();
	});
	return arr;
}

//Task3
var date = new Date(2018, 5, 2);
function isWeekEnd(date) {
	var day = date.getDay();
	if (day>=1 && day!=6) {
		return 'Работаем дальше…';	
	}
	else {
		return 'Выходной!'
	}
}

//Task4 

var request = prompt("Введите выражение");
function runJS(string) {
  try {
   eval(string);
   return true;
  } catch (e) {
    return( e.message);
	}
}

runJS(request);