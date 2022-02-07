// let numeric1 = prompt('Введіть число')
// let numeric2 = prompt('Введіть ще одне число')
// if (numeric1 > numeric2) {
//     console.log(numeric1)
// }
// if (numeric2 > numeric1) {
//     console.log(numeric2)
// }
// if (numeric1 == numeric2) {
//     console.log('Значення рівні')
// }
// let nubmerApartments = prompt('Введіть номер квартири від 1 до 90')
// if (nubmerApartments >=1 && nubmerApartments <=20 ){
//     console.log("Перший під'їзд")
// }
// if (nubmerApartments >=21 && nubmerApartments <=48 ){
//     console.log("Другий під'їзд")
// }
// if (nubmerApartments >=49 && nubmerApartments <=90 ){
//     console.log("Третій під'їзд")
// }
// let number = prompt('Введіть будь яке число')
// if (number == 10) {
//     alert('Вірно!')
// }
// else{
//     alert('Невірно')
// }
// let owu = prompt('Щоб дізнатись чи йдемо ми на навчання в OKTEN введіть температуру')
// if (owu >= 10 && owu <= 22 ){
//     alert('Йдемо')
// }
// else{
//     alert('Сьогодні ОНЛАЙН')
// }

let victoruna = +prompt('Для участі у вікторині введіть число від 1 до 5')
//victoruna = parseInt(victoruna);
switch (victoruna) {
    case 1:
        alert('Ваш приз АААВтовмобіль');
        break;
    case 2:
        alert('Ваш приз PlayStation 5');
        break;
    case 3:
        alert('Ваш приз 22 Bitcoins');
        break;
       
    case 4:
        alert('Ваш приз Булочка з маком');
        break;
      
    case 5:
        alert('Ваш приз нічого)))))))))))))))))))');
        break;
    default:
            alert("Від 1 до 5, туго з простими числами?");
    
}
