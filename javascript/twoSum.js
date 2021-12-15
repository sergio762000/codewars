/**
 * Функция поиска в массиве слагаемых numbers, которые дают сумму равную target
 * @param numbers
 * @param target
 */
function twoSum(numbers, target) {
  let result = [];
  let length = numbers.length;

  for (let i = 0; i < length - 1; i++) {
    let secNum = target - numbers[i];
    let indElement = numbers.indexOf(secNum, i + 1);
    if (indElement !== -1) {
      result.push(i);
      result.push(indElement);
      break;
    }
  }

  console.log(result);
}

twoSum([0, 1, 2, 3], 4);
twoSum([1234,5678,9012], 14690);
twoSum([2,2,3], 4);
