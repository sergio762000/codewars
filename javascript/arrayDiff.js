/**
 * Функция, принимает на вход два массива. Если значение из первого массива содержится во втором
 * оно не попадает в результирующий массив
 * Ниже мое решение
 * А вот лучшее: return a.filter(e => !b.includes(e));
 *
 * @param a
 * @param b
 * @returns {*}
 */

function arrayDiff(a, b) {
  let result = null;

  if (a.length !== 0 && b.length !== 0) {
    result = [];
    a.forEach((a_value) => {
      if (!b.includes(a_value, 0)) {
        result.push(a_value);
      }
    });
  } else {
    result = a;
  }
  return result;
}

arrayDiff([1, 2],[1]);
arrayDiff([], [4,5]);
arrayDiff([3,4], [3]);
arrayDiff([1,8,2], []);
arrayDiff([1,2,3], [1,2]);