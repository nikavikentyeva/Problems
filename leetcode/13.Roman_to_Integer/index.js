const romanToInt = function(s) {
  let a = s.split('')

  for (let item = 0; item < a.length; item++) {

    // I
    if (a[item] === 'I' && a[item + 1] === 'V') {
      a[item] = 4
      a[item + 1] = 0
    }
    if (a[item] === 'I' &&  a[item + 1] === 'X') {
      a[item] = 10
      a[item + 1] = 0
    }
    if (a[item] === 'I' && a[item + 1] !== 'V' && a[item + 1] !== 'X') {
      a[item] = 1
    }

    //V
    if (a[item] === 'V') {
      a[item] = 5
    }

    // X
    if (a[item] === 'X'  && a[item + 1] !== 'L' && a[item + 1] !== 'C') {
      a[item] = 10
    }
    if (a[item] === 'X'  && a[item + 1] === 'L') {
      a[item] = 40
      a[item + 1] = 0
    }
    if (a[item] === 'X'  && a[item + 1] === 'C') {
      a[item] = 90
      a[item + 1] = 0
    }

    // L
    if (a[item] === 'L') {
      a[item] = 50
    }

    // C
    if (a[item] === 'C' && a[item + 1] !== 'D' && a[item + 1] !== 'M') {
      a[item] = 100
    }
    if (a[item] === 'C' && a[item + 1] === 'D') {
      a[item] = 400
      a[item + 1] = 0
    }
    if (a[item] === 'C' && a[item + 1] === 'M') {
      a[item] = 900
      a[item + 1] = 0
    }

    // D
    if (a[item] === 'D') {
      a[item] = 500
    }
    // M
    if (a[item] === 'M') {
      a[item] = 1000
    }
  }
  let b = a.reduce((prev,item) => {

    return prev + item
  })
  return b
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
