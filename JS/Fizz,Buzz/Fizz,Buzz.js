var str = 100;
var j1 = str;
var arr1 =[];
var j1=str;
	for (var i = 0; i<str; i++){
	if (j1%3 == 0)
    {if(j1%5 == 0)
		{arr1 [i] = 'FizzBuzz';}
		else{
	arr1 [i] = 'Fizz';}}
      else{
		if(j1%5 == 0)
        {arr1 [i] = 'Buzz';}
      else{
	  arr1 [i] = j1;}}
	j1 = j1 -1;}
    console.log(arr1);

/*
let r = 3

function testPrime(number) {
    var isPrime = number == 2|| number == 3;
    var checkNumber = Math.sqrt(number);
        for (i = 2; i <= checkNumber; i++) {
        if (number % i == 0 && number != i) {
                isPrime = false;
                break
            } else isPrime = true;
        }
 
    return isPrime
}

while (r!==0){
  if (testPrime(r) == 1){
console.log(testPrime(r),r);}
    r = r-1;}
//console.log(r);

function count(){
var j1 = j;
var ar='';
	for (var i = 0; i<j; i++){
	if (j1>1 && j1%2 !== 0 || j1==2){
		if(j1%3 !== 0 || j1==3){
	arr2 [i] = j1;}}
	j1 = j1 -1;}
for (ji = 0; ji <j; ji++) {
  if (arr2[ji] !== undefined){
    ar = ar +','+arr2[ji];}}
	console.log(ar);}
count();*/