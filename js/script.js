const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat:false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?',''),
          b = prompt('Оцените фильм от 1 до 10','');
    
    if (a != null && b != null && a !='' && b !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Маловато фильмов :(');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Неплохо');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман !');
} else {
    console.log('Произошла ошибка');
    i--;
}
      
console.log(personalMovieDB);