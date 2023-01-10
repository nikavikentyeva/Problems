// Из числа сделали строку, метод split из строки превратил в массив,
// reverse массив перевернул, метод join превраил массив обратно в строку
// затем превратили строку обратно в число

const isPalindrome = function(x) {
  let num = x.toString().split('').reverse().join('')
  return x === Number(num)
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))

