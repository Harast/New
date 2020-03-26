var str = 0;
var j = 0;
var j1 = 0;


function isright(obj)
{
if (obj.value>1e6) obj.value='err'; 
if (obj.value<1) obj.value='';
str = obj.value;
j=Math.trunc(Math.sqrt(str));
console.log(j);
console.log(str);
}
function count(){
let r = str;
var i = 0;
let ar =[];
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

while (r>=0){
  if (testPrime(r) == 1){
//console.log(testPrime(r),r);
    ar.push(r);}
    r = r-1;
}
	console.log(ar);
	document.getElementById("ar").innerHTML = ar;
}
function Fizz_Buzz()
{	
var j1=str
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
	document.getElementById("arr1").innerHTML = arr1;
}

	