const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat:false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('Оцените фильм от 1 до 10',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('Оцените фильм от 1 до 10','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);