// Необходимо реализовать функцию, которая подсчитывает среднюю длину каждого слова в строке.
// Результатом вычисления функции является вещественное число, округленное до двух знаков после запятой.
// При передаче в функцию новой строки, она должна учитывать результаты предыдущих вычислений.

// Пример:
// "Я хорошо знаю javascript" -> 5.25
// "Но некоторые вопросы вызывают трудности, например замыкания." -> 6.64

// ***************
//создаем переменные, в которые будут записываться промежуточные итоги по строкам
let commonSumOfLetters = 0;
let commonAmountOfWords = 0;

const getAverageLength = (str) => {
  //убираем из строки знаки пунктуации
  const strWithoutPunctuation = str.replace(
    /[.,/#!$%^&*?;:{}=\-_`~()+""@№]/g,
    ""
  );
  //получаем из строки массив из слов
  const arrOfWords = strWithoutPunctuation.split(" ");
  //считаем сумму всех букв в словах
  const sumOfLetters = arrOfWords.reduce((acc, el) => {
    return (acc = acc + el.length);
  }, 0);

  //создаем функцию, которая будет рассчитывать среднюю длину слова с строке с учетом предыдущих вычислений
  const getCommonAverageLength = (sumOfLetters, amountOfWords) => {
    commonSumOfLetters += sumOfLetters;
    commonAmountOfWords += amountOfWords;
    const averageLength = (commonSumOfLetters / commonAmountOfWords).toFixed(2);
    return averageLength;
  };

  return getCommonAverageLength(sumOfLetters, arrOfWords.length);
};

console.log(getAverageLength("Я хорошо знаю javascript"));
console.log(
  getAverageLength(
    "Но некоторые вопросы вызывают трудности, например замыкания."
  )
);
