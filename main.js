// Написать конструкцию switch case, которая будет сравнивать значения 2 переменных: одна из которых записана по умолчанию, 2 задается через promt.
// Выполнить сравнения вида = верно – да / не верно – нет  / не сработало вывести сообщение не сработало

// let arg = 'default value';
// let prm = prompt('Введитезначение переменной)
// switch (prm) {
//   case arg:
//    console.log("значение второй переменной по умолчанию");
//     break;

//   default:
//     console log("Вторая переменная не равна значению по умолчанию");
// }

// let lego = prompt("Введите значение от 1 до 12");
// switch (lego) {
//   case "12":
//   case "1":
//   case "2":
//     alert("Зима");
//     break;
//   case "3":
//   case "4":
//   case "5":
//     alert("Весна");
//     break;
//   case "6":
//   case "7":
//   case "8":
//     alert("Лето");
//     break;
//   case "9":
//   case "10":
//   case "11":
//     alert("Осень");
//     break;

//   default:
//     break;
// }
// Написать алгоритм при котором у конструкции есть 4 значения, если пользователь вводит числа от 1 до 3 то выводим сообщение – зима, от 3 -6 – весна, от 6-9 – лето от 9 до 12 – осень.

let firstName = "Trickster";
let lastName = null;
let User = "Ivan Kochukov";
alert(firstName ?? lastName);
alert(User ?? lastName);
// Создать 3 переменные, одну из них сделать null и выполнить проверку используя оператор нулевого слияния
