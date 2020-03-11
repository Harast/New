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

