//Task1
var day = prompt('Какой сегодня день?');
alert('Cегодня ' + day + '!' );

//Task2
var role = prompt('Кто Вы? Гость или Директор');
var message = (role =='Гость') ? 'Привет':
			  (role == 'Директор') ? 'Здравствуйте':
			  (role == '') ? 'Познакомимся?':
			  '';
alert(message);

//Task3
var officialName = prompt('Каково "официальное" название Javascript?');
var message = (officialName == 'EcmaScript') ? 'Верно!':
			  'Не знаете? "EcmaScript"!';
alert (message);

//Task4

var userName = prompt('Кто пришел?');
if (userName=='Админ') {
	var password = prompt ('Пароль?');
	if (password=='Черный Властелин') {
	alert ('Добро пожаловать!');
	}else if (password==null) {
	alert ('Вход отменен');
	}else {
	alert ('Пароль неверен');
	}
}else if (userName==null) {
	alert ('Вход отменен');
}else {
	alert ('Я вас не знаю');
}
    
// Task 5 1-st edition

var a=0;
var b=1;
console.log(a);
console.log(b);
for ( i=3; i<= 15; i++) {
	var c = a+b;
	a=b;
	b=c;
	console.log(c);
}

// Task 5 2-nd edition

 var fibo = [0,1];
 for(i=0; i<13; i++){
 	fibo.push(fibo[i]+fibo[i+1]);
 }
 console.log(fibo);

// Task 6

var min = 10;
var max = 20;

while (true){
	var firstNumb = Math.floor(Math.random() * (max - min +1)) + min;
	var secondNumb = Math.floor(Math.random() * (max - min +1)) + min;
	var sum = prompt('Введите сумму чисел ' + firstNumb  + ' + ' + secondNumb);
	if (sum==firstNumb+secondNumb){
		alert('Верно!');
		break;
	}
}
		
