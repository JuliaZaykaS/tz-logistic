// Необходимо реализовать функцию, подсчитывающую рейтинг.
// На вход передается массив из пяти целых чисел,
// где каждое число отображает количество голосов пользователей на звезду.
// Первый элемент содержит количество оценок «1 звезда»,
// последний – количество оценок, когда пользователь нажал на 5 звезд.
// Функция возвращает массив, где первое значение — это средний рейтинг звезд,
// округленный до двух знаков. Второй элемент массив отображает рейтинг в виде строки «***».

// Пример:
// [0, 2, 0, 1, 23] -> [4.73, "*****"]
// [16, 17, 23, 40, 45] -> [3.57, "****"]
// [55, 67, 98, 115, 61] -> [3.15, "***"]