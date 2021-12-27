/**
 * Напишите функцию, которая принимает одну строку (слово) в качестве аргумента.
 * Функция должна возвращать упорядоченный список,
 * содержащий индексы всех заглавных букв в строке.
 * @param word
 */
const capitals = function (word) {
  let result = [];
  word.split('').map((sym, counter) => {
    (sym.charCodeAt(0) > 64 && sym.charCodeAt(0) < 91) ? result.push(counter) : null;
  });

  // Вне зависимости от кодировки
  // for(let i = 0; i < word.length; i++) {
  //   if(word[i].toUpperCase() === word[i]) result.push(i);
  // }

  console.log(result);
}

capitals('CodEWaRs');