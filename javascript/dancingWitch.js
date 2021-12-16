/**
 * Условия поиск ведьмы:
 * Минимальная длина строки равна 3;
 * Массив содержит не менее 2 строк, а строка содержит не менее 2 букв;
 * Когда Ведьма не перепрыгивает, она перемещается на обычное расстояние;
 * Буквы могут менять свое направление;
 * Всегда будет только одна ведьма (или ее не будет).;
 * Две буквы не могут занимать одну и ту же позицию одновременно;
 * Все строки содержат одинаковые буквы.
 * @param arr
 * @return string
 */

function figureOut(arr) {
  let witch = null;
  let arrLength = arr.length > 0 ? arr.length : 0;

  if (arrLength >= 2 ) {
    for (let i = 0; i < arrLength - 1; i++) {
      let stringLength = arr[i].length;
      for (let j = 0; j < stringLength; j++) {
        if (arr[i].charAt(j) !== ' ') {
          let symbolFirstString = arr[i].charAt(j);
          let posSymbolFirstString = j;
          let posSymbolSecondString = arr[i + 1].indexOf(symbolFirstString);

          if (Math.abs(posSymbolFirstString - posSymbolSecondString) > 1) {
            witch = symbolFirstString;
          }
        }
      }
    }

  }

  console.log(witch);
}

figureOut(["a b", " ba"]);
figureOut(["ab kl", "ba kl", "a blk"]);
figureOut(["icwth", "wicth", "witch"]);
figureOut(["a  b  c", "a b  c ", " ba   c"]);
figureOut([" x y z ", " xy  z ", "yx   z ", " xy  z "]);
figureOut(["hop", "hpo", "pho"]);
//
figureOut(["abdgefc", "adbegcf", "daebgfc", "adegfcb", "aedfgbc", "adegfcb", "dagecfb", "adegfcb", "adgefbc"]);
figureOut(["dac   b ", "acd    b", "adc    b", "acd   b ", "ca d   b", "c ad  b ", "c ad  b ", " ca db  ", " ac bd  "]);
figureOut(["cb feg da", "bcf ge ad", "cbfg ea d", "cfb gae d", "fcbga e d", "fbcag  ed", "bfac ged ", "baf cgde "]);
