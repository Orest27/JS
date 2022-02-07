let min = prompt("Введіть число від 0 до 59");
if (min >= -99999999 && min <= 0) {
    console.log ("Некоректне значення");
 }
if (min >= 0 && min <= 14) {
   console.log ("Перша");
}
if (min >= 15 && min <= 30) {
   console.log ("Друга");
}
if (min >= 31 && min <= 45) {
   console.log ("Третя");
}
if (min >= 46 && min <= 59) {
   console.log ("Четверта");
}
if (min >= 60 && min <= 99999999999999999999) {
    console.log ("Некоректне значення");
 }333

let day = prompt("Введіть число від 1 до 31");
if (day >=1 && day <=10){
    console.log("Перша декада");
}
if (day >=11 && day <=20){
    console.log("Друга декада");
}
if (day >=21 && day <=31){
    console.log("Третя декада");
}


let test = 'dfhfg';
  if (test === true) {
      console.log('ВІРНО')
  } else {
      console.log('НЕВІРНО')
  }
  
 a = 0;
if (a !== 4) {
   console.log('Вірно')
} else {
   console.log('Невірно')
}
let dayOfWeeks = +prompt('Введіть день тижня від 1 до 7')
switch (dayOfWeeks) {
    case 1:
        console.log('ПОНЕДІЛОК: писати код цілий понеділок');
        break;
    case 2:
        console.log('ВІВТОРОК: писати код цілий вівторок');
        break;
    case 3:
        console.log('СЕРЕДА: писати код цілу середу');
        break;
    case 4:
        console.log('ЧЕТВЕР: писати код цілий четвер');
        break;
    case 5:
        console.log("ПЯТНИЦЯ: писати код цілу п'ятницю");
        break;
    case 6:
        console.log('СУБОТА: писати код цілу соботу');
        break;
    case 7:
        console.log('НЕДІЛЯ: відпочинок!!!');
        break;
    default:
        console.log("краще піди писати код");
}
let year = +prompt('Введіть будь який рік')
  if ( year % 4 === 0){
     console.log('Високосний')
  } else {
     console.log('Невисокосний')
  }
let oficialName = prompt('Яка «офіційна» назва JavaScript?');
  if(oficialName === 'ECMAScript'){
     alert('Правильно, гарна робота');
  } else{
     alert('Неправильно, офіційна назва - ECMAScript!');
  }