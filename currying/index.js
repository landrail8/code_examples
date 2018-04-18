
/* каррирующая функция 
берет список аргументов для этой функции и
использует их для возврата каррированной версии оригинальной функции uncurried
*/
var curryIt = function(uncurried) {
    // получаем массив переданных аргументов, первый будет this, его не берем
    var parameters = Array.prototype.slice.call(arguments, 1);

    // возвращаем анонимную функцию без параметров
    return function() {

        /* анонимная функция возвращает оригинальную функцию с массивом параметров,
        который собирается как parameters и arguments */
        return uncurried.apply(this, parameters.concat(
        Array.prototype.slice.call(arguments, 0)
        ));
    };
};
  

/*Чтобы использовать ее, мы передаем имя функции, 
принимающей любое количество аргументов вместе с теми аргументами, 
которые мы хотим предварительно заполнить. Назад мы получаем функцию, 
ожидающую оставшиеся аргументы:*/
var greeter = function(greeting, separator, emphasis, name) {
  console.log(greeting + separator + name + emphasis);
};

// функция, которая поможет быстро выдавать приветствия, заполняя только один параметр - Имя
var greetHello = curryIt(greeter, "Hello", ", ", ".");
greetHello("Heidi"); //"Hello, Heidi."
greetHello("Eddie"); //"Hello, Eddie."
  
  
  
  
  