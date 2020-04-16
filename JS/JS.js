var str = 0;
var str1 = '';

function isright(obj){
  let j = 0;
  if (obj.value>1e6) obj.value='err';
  if (obj.value<1) obj.value='';
  str = obj.value;
  j=Math.trunc(Math.sqrt(str));
  console.log(j);
  console.log(str);
}

function count(){
  let r = str;
  let i = 0;
  let ar =[];
  
  function testPrime(number) {
    let isPrime = number == 2|| number == 3;
    let checkNumber = Math.sqrt(number);
  
    for (i = 2; i <= checkNumber; i++) {
      if (number % i == 0 && number != i){
        isPrime = false;
      break
      }else{
        isPrime = true;
      }
    }
    return isPrime;
  }
          
  while (r>=0){
    if (testPrime(r) == 1){
      ar.push(r);
    }
    r = r-1;
  }
      
  console.log(ar);
  document.getElementById("ar").innerHTML = ar;
}

function Fizz_Buzz(){
  let j1=str;
  let arr1=[];
  
  for (var i = 0; i<str; i++){
    if (j1%3 == 0){
      if(j1%5 == 0){
        arr1 [i] = 'FizzBuzz';
      }else{
        arr1 [i] = 'Fizz';
      }
    }else{
      if(j1%5 == 0){
        arr1 [i] = 'Buzz';
      }else{
        arr1 [i] = j1;
        }
    }
      j1 = j1 -1;
  }
  
  console.log(arr1);
  document.getElementById("arr1").innerHTML = arr1;
}

function Palindrom(obj){
str1 = obj.value;
pal = '';
  if(str1 === str1.split('').reverse().join('')){
	Pal = 'Palindrom';
  }else{
	  Pal = 'It`s not palindrome';
	  console.log(Palindrom);
  }
 document.getElementById("Pal").innerHTML = Pal;
}