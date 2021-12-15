/**
 * Функция, возвращает длину самого короткого слова из предложения
 * или несколько самых коротких слов, если они есть
 */

function findShort(s) {
  return s.split(' ').sort((a, b) => a.length - b.length).shift().length;
}

findShort('А роза упала на лапу Азора');
findShort("bitcoin take over the world maybe who knows perhaps");
