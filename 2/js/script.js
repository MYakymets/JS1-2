var nameList=[];

for (var i=0; i<5; i++) {
  nameList[i] = prompt ('Введите имя для списка: ', '');
}//for i

alert('СПАСИБО!');
var myName = prompt ('Введите ваше имя: ', '');
var flag = false;
var tempName;
for (var i=0; i<5; i++) {
  if (myName == nameList[i]){
    flag = true;
    tempName = nameList[i]
  }//if
}//for i

if (flag == false) {
  alert ('Ошибка. Нет доступа.');
}
else {
  alert (tempName + ', вы успешно вошли!');
}

