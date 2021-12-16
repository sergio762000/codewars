/**
 * list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
 * // returns 'Bart, Lisa & Maggie'
 * @param names
 */

function list (names) {
  let result = '';

  switch (names.length) {
    case 0: break;
    case 1:
      result = names[0].name;
      break;
    default:
      for (let i = 0; i < names.length; i++) {
        if (i === names.length - 2) {
          result += names[i].name + ' & ';
        } else {
          result += names[i].name;
          if (i !== names.length - 1) {
            result += ', ';
          }
        }
      }
      break;
  }

  console.log(result);
}


list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

//более изящное решение

// function list(names) {
//   var xs = names.map(p => p.name)
//   var x = xs.pop()
//   return xs.length ? xs.join(", ") + " & " + x : x || ""
// }