const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt('Последний прсмотренный фильм?', ''),
  b = +prompt('Оцените его', ''),
  c = prompt('Последний прсмотренный фильм?', ''),
  d = +prompt('Оцените его', '');

personalMovieDB.movies[a] = b;

personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
// ===============================
// Вывести пирамидку звездочек
// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i += 1) {
//   for (let j = 0; j < i; j += 1) {
//     result += '*';
//   }
//   result += '\n';
// };

// console.log(result);
// ============================

const kar = 'fiat';
const kur = 'fiat';
const hur = 67;
