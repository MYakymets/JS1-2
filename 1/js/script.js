function myPow (num, n) {
  var result=1;
  if (n>=0)
   for (var i=0; i<n; i++){
      result*=num;
    }//for i
  else {
    for (var i=0;i<0-n;i++) {
      result*=num;
    }//for i
    result=1/result;
  }//else
  return result;
}//myPow

var num = prompt ('Введите число: ', '');
var n = prompt ('Введите степень: ', '');
var result =myPow(num, n);
console.log('Число ', num, ' в степени ', n, ' равно: ', result);
