/* Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і 
maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, 
а потім усі елементи з secondArray.

Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву 
з довжиною maxLength елементів.
В іншому випадку функція повинна повернути весь новий масив.
Візьми код нижче і встав після оголошення своєї функції для перевірки*/
function makeArray(firstArray, secondArray, maxLength){
    const arrays = firstArray.concat(secondArray);
    if (arrays.length > maxLength) {
       return arrays.slice(0, maxLength); 
    }else {
        return arrays;
    }
   
}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []