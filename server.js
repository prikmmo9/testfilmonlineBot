const http = require('http')

const server = http.createServer();

server.on('request', (req, res) => {

    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)

    res.writeHead(200, {'Content-Type': 'text/html'})

    res.end(`
    
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


    <title>Главная</title>
</head>
<body style='background-color:gray;'>

<script src="/site/bazatest/serialkp.js"></script>

<script src="/site/bazafunction/function.js"></script>

<script>

let div;
let l;
l = 1;
let divNameFilm1;
let imgFilm1;
let divNameFilm2;
let x;
let arrFilm13;
let arrFilm2 = [];
let v;
v = 1;
let s;
s = 1;
let countElementsArr;
let countElementsArr2;
let funkButton1;
let funkButton2;
let arrSerial1;
let arrFilm16;
let arrFilm8;
let arrFilm4;
let arrFilm22;
let arrFilm12 = [];
let countElementsArr12;
let countElementsArr13;
let arr1 = 'arrFilm1';
let arr2 = 'arrFilm2';
let arrFilm1;

let br;
function deliteFilms() {

    let element = document.querySelector('div');
    element.remove();

    let element2 = document.querySelector('div.alert');
    element2.remove();

}

function deliteFilmButton() {

    let element = document.querySelector('div.alert');
    element.remove();
    let element2 = document.querySelector('div.alert');
    element2.remove();
    let element3 = document.querySelector('img.alert');
    element3.remove();
    let element4 = document.querySelector('img.alert');
    element4.remove();
    let element5 = document.querySelector('button.alert');
    element5.remove();
    let element6 = document.querySelector('button.alert');

    element.remove();
    element2.remove();
    element3.remove();
    element4.remove();

    element6.remove();

}

function deliteButton() {
    let element5 = document.querySelector('button.alert');
    element5.remove();
    let element6 = document.querySelector('button.alert');
    element6.remove();
}

function showButton(buttonFunction, buttonFunction2) {




    let buttonElement1 = document.createElement('button');
    buttonElement1.setAttribute("onClick", buttonFunction);
    buttonElement1.textContent = "Выбрать 1";
    buttonElement1.className = "alert";
    document.body.append(buttonElement1);





    let buttonElement2 = document.createElement('button');
    buttonElement2.setAttribute("onClick", buttonFunction2);
    buttonElement2.textContent = "Выбрать 2";
    buttonElement2.className = "alert";
    document.body.append(buttonElement2);


 

}

function funkButton(arr1, arr2) {
    funkButton1 = 'buttonVib1(0, ' + arr1 + ', ' + arr2 + ')';
    funkButton2 = 'buttonVib1(1, ' + arr1 + ', ' + arr2 + ')';
}

function deliteYouTube() {

    let element = document.querySelector('iframe.alert');
    element.remove();

}

function showYou(UrlYouTube, i) {

    youTube1 = document.createElement("iframe");
    youTube1.setAttribute("width", "560");
    youTube1.setAttribute("height", "315");
    youTube1.setAttribute("src", UrlYouTube[i][2]);
    youTube1.className = "alert";
    document.body.append(youTube1);



}




arrFilm1 = [
    ff= {
        1: 'Рик и Морти',
        2: 'https://upload.wikimedia.org/wikipedia/ru/c/ce/Green_mile.jpg',
        3: 1,
        4: 2013,
        5: 'gagagagagaga',
    },
    ff= {
        1: 'Гравити Фолз',
        2: 'https://www.film.ru/sites/default/files/movies/posters/1613370-1436509.jpg',
        3: 2,
        4: 2012,
        5: 'gagagagagaga',
    },
    ff= {
        1: 'Аватар: Легенда об Аанге',
        2: 'https://thumbs.dfs.ivi.ru/storage33/contents/4/9/2e2c4b1ca80a5e9acf45057a7cf879.jpg',
        3: 3,
        4: 2004,
        5: 'gagagagagaga'
    },
    ff= {
        1: 'Друзья',
        2: 'https://upload.wikimedia.org/wikipedia/ru/d/d7/Coco_%282017_film%29_logo.jpg',
        3: 4,
        4: 1994,
        5: 'gagagagagaga'
    },
    ff= {
        1: 'Атака титанов',
        2: 'https://www.kino-teatr.ru/movie/posters/big/8/25308.jpg',
        3: 5,
        4: 2013,
        5: 'gagagagagaga'
    },
    ff= {
        1: 'Во все тяжкие',
        2: 'https://static.kinoafisha.info/k/movie_posters/canvas/800x1200/upload/movie_posters/5/7/4/5475/f105fa0f6650a5781b9237420fbf4c40.jpg',
        3: 6,
        4: 2008,
        5: 'gagagagagaga'
    },
    ff= {
        1: 'Офис',
        2: 'https://upload.wikimedia.org/wikipedia/ru/f/f0/The_Lord_of_the_Rings._The_Two_Towers_%E2%80%94_movie.jpg',
        3: 7,
        4: 2005,
        5: 'gagagagagaga'
    },
    ff= {
        1: 'Сопрано',
        2: 'https://www.kino-teatr.ru/movie/posters/big/8/97458.jpg',
        3: 8,
        4: 1999,
        5: 'gagagagagaga'
    },
    ff= {
        1: 'Ведьмак',
        2: 'https://upload.wikimedia.org/wikipedia/ru/9/93/Pulp_Fiction.jpg',
        3: 9,
        4: 1973,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Теория большого взрыва',
        2: 'https://www.kino-teatr.ru/movie/posters/big/7/2607.jpg',
        3: 10,
        4: 2007,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Клиника',
        2: 'https://i.pinimg.com/474x/47/70/ba/4770bab720781ce36bdf46f2507d24bb.jpg',
        3: 11,
        4: 2001,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Как я встретил вашу маму',
        2: 'https://upload.wikimedia.org/wikipedia/ru/6/62/Lion_king_ver1.jpg',
        3: 12,
        4: 2005,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Игра престолов',
        2: 'https://upload.wikimedia.org/wikipedia/ru/9/90/BTTF_DVD_rus.jpg',
        3: 13,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Доктор Хаус',
        2: 'https://upload.wikimedia.org/wikipedia/ru/f/f4/%D0%A2%D1%91%D0%BC%D0%BD%D1%8B%D0%B9_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8C_%282008%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg',
        3: 14,
        4: 2004,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Аркейн',
        2: 'https://upload.wikimedia.org/wikipedia/ru/8/8a/Fight_club.jpg',
        3: 15,
        4: 2021,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Бесстыжие',
        2: 'https://static.kinoafisha.info/k/movie_posters/canvas/800x1200/upload/movie_posters/8/7/9/3338978/51863675c490a4274e6dfdfb71d4b97f.jpg',
        3: 16,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Чёрные паруса',
        2: 'https://upload.wikimedia.org/wikipedia/ru/b/bc/Poster_Inception_film_2010.jpg',
        3: 17,
        4: 1979,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Шерлок',
        2: 'https://b1.filmpro.ru/c/561054.jpg',
        3: 18,
        4: 2010,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Убивая Еву',
        2: 'http://www.hdkinoteatr.com/uploads/posts/2012-04/im4f82a60984a78.jpg',
        3: 19,
        4: 2018,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Крутой учитель Онидзука',
        2: 'https://www.kino-teatr.ru/movie/posters/big/7/4017.jpg',
        3: 20,
        4: 1999,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Аббатство Даунтон',
        2: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/39/Shrek.jpg/800px-Shrek.jpg',
        3: 21,
        4: 2010,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'По ту сторону изгороди',
        2: 'http://s00.yaplakal.com/pics/pics_original/4/0/2/1758204.jpg',
        3: 22,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Йеллоустоун',
        2: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/93/1972_dzhentlmeny_udachi.jpg/275px-1972_dzhentlmeny_udachi.jpg',
        3: 23,
        4: 2018,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Ковбой Бибоп',
        2: 'https://ruskino.ru/media/poster/003/Frhotd696kAkziXOZdgeQe1aGhY.jpg',
        3: 24,
        4: 1998,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Отчаянные домохозяйки',
        2: 'https://www.kino-teatr.ru/movie/posters/big/8/88.jpg',
        3: 25,
        4: 2004,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Человек-паук',
        2: 'https://www.hdclub.ua/files/film/big/bigi51489c8294964.jpg',
        3: 26,
        4: 1994,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Светлячок',
        2: 'https://www.themoviedb.org/t/p/original/uqReraSvOaQXLkFp3TjqQQT2daf.jpg',
        3: 27,
        4: 2002,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Берсерк',
        2: 'https://resizer.mail.ru/p/92425bac-ae3c-537e-a565-5a074482bd9a/AQACyHjKct99JTDkTDc-QR5Xj9x93YjtQ97n5lbiZSzLlYhS_0MxKVlcpptcCRniyAzc1ZBW9qwjfe9LMkbL1Szf8ZI.jpg',
        3: 28,
        4: 1997,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Голяк',
        2: 'https://kinogo.zone/uploads/posts/2019-10/1570624244-1567176441-ostrov-proklyatyh.jpg',
        3: 29,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Американская семейка',
        2: 'https://thumbs.dfs.ivi.ru/storage28/contents/8/4/3a65e81db80849f3f405b975b13592.jpg',
        3: 30,
        4: 2009,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Метод Комински',
        2: 'https://upload.wikimedia.org/wikipedia/ru/b/b1/Snatch_Movie_Poster.jpg',
        3: 31,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Патрик Мелроуз',
        2: 'https://kinocensor.ru/cache/videos/26/916b00f17219c6bb51a257c09fba17ba-367x550.jpeg',
        3: 32,
        4: 2007,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Наруто: Ураганные хроники',
        2: 'https://i.pinimg.com/474x/f3/c3/f4/f3c3f451fffc2b297691010a8a8aa7.jpg',
        3: 33,
        4: 2007,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Южный Парк',
        2: 'https://www.themoviedb.org/t/p/original/6hofDprIPHEMElu0UmDCchSeUkf.jpg',
        3: 34,
        4: 1997,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Демон',
        2: 'https://plaqat.ru/images/15075.jpg',
        3: 35,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Приключения Пети и Волка',
        2: 'https://fs.kinomania.ru/file/film/c/fb/cfb0ad9812331c8f4ef0dbd67979c01f.jpeg',
        3: 36,
        4: 2018,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Звёздная принцесса и силы зла',
        2: 'https://upload.wikimedia.org/wikipedia/ru/f/f5/Ostrov_sokrovish_anim.jpg',
        3: 37,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Триггер',
        2: 'https://www.ice-nut.ru/italy/italy15401.jpg',
        3: 38,
        4: 2018,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Чернобыль',
        2: 'https://upload.wikimedia.org/wikipedia/ru/2/2c/Hacksaw_Ridge.jpg',
        3: 39,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Футурама',
        2: 'https://upload.wikimedia.org/wikipedia/ru/b/b5/Help_poster.jpg',
        3: 40,
        4: 1999,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Братья по оружию',
        2: 'https://www.kino-teatr.ru/movie/posters/big/2/29792.jpg',
        3: 41,
        4: 2001,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Вызовите акушерку',
        2: 'https://upload.wikimedia.org/wikipedia/ru/b/b2/Harry_Potter_and_the_Prisoner_of_Azkaban_%E2%80%94_movie.jpg',
        3: 42,
        4: 2012,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Дом совы',
        2: 'https://kinovalenok.tv/uploads/posts/2020-05/1589931955135af090de3a4.jpeg',
        3: 43,
        4: 2020,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Табу',
        2: 'https://www.film.ru/sites/default/files/movies/posters/_imported/p_138187.jpg',
        3: 44,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Черное зеркало',
        2: 'https://ithinker.ru/static/images/film/1/50.jpg',
        3: 45,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Настоящий детектив',
        2: 'https://resizer.mail.ru/p/5e2aa36e-947a-598e-a8f1-67f3bd6a3f8d/AQACpmxHgN2q_BWNZ8Eeg8ct8K4-bFqLa8mRUsEh3DciR8mY9IdweikOwzH4aglEb3C3zn9BiGNEFjzUnfXNLWVRtRw.jpg',
        3: 46,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Дарреллы',
        2: 'https://b1.filmpro.ru/c/111577.jpg',
        3: 47,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Тетрадь смерти',
        2: 'https://files.cinerama.uz/images/2011/08/24/4f04b33d80c6d5.85797523.jpg',
        3: 48,
        4: 2006,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Крайний космос',
        2: 'https://ithinker.ru/static/images/film/1/7.jpg',
        3: 49,
        4: 2018,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Силиконовая долина',
        2: 'https://fs.kinomania.ru/file/film/5/76/576859add28f16b1b35f428620ff17.jpeg',
        3: 50,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Последний человек',
        2: 'https://upload.wikimedia.org/wikipedia/ru/0/07/Back-to-Future-Part-II-529542.jpg',
        3: 51,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Конец ***го мира',
        2: 'https://upload.wikimedia.org/wikipedia/ru/f/fb/1984_lyubov_i_golubi.jpg',
        3: 52,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Первобытный',
        2: 'https://upload.wikimedia.org/wikipedia/ru/f/fb/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9_%D1%80%D0%BE%D0%BC%D0%B0%D0%BD_%D0%BA%D0%B8%D0%BD%D0%BE%D0%B0%D1%84%D0%B8%D1%88%D0%B0.jpg',
        3: 53,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Том и Джерри',
        2: 'https://upload.wikimedia.org/wikipedia/ru/e/ed/Kinopoisk.ru-Pirates-of-the-Caribbean_3A-Dead-Man_27s-Chest-380676.jpg',
        3: 54,
        4: 1940,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Время приключений',
        2: 'https://b1.filmpro.ru/c/84014.jpg',
        3: 55,
        4: 2010,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Повар императора',
        2: 'https://www.scrolldroll.com/wp-content/uploads/2020/01/The-Pianist-2002-Must-Watch-Hollywood-Movies.jpg',
        3: 56,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Охотник х Охотник',
        2: 'https://upload.wikimedia.org/wikipedia/ru/d/df/%D0%A1%D1%83%D0%B4%D1%8C%D0%B1%D0%B0_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%29.jpg',
        3: 57,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Энн',
        2: 'https://kino-punk.ru/wp-content/uploads/2017/08/kinopoisk.ru-Kimi-no-na-wa-2866425.jpg',
        3: 58,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Пуаро',
        2: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/06/%D0%9E%D1%84%D0%B8%D1%86%D0%B5%D1%80%D1%8B_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82.jpg/250px-%D0%9E%D1%84%D0%B8%D1%86%D0%B5%D1%80%D1%8B_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82.jpg',
        3: 59,
        4: 1989,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Академия Амбрелла',
        2: 'https://upload.wikimedia.org/wikipedia/ru/9/94/Soul_%28poster%29.jpg',
        3: 60,
        4: 1976,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Невероятные приключения ДжоДжо',
        2: 'https://upload.wikimedia.org/wikipedia/ru/9/91/Scent_of_a_Woman.jpg',
        3: 61,
        4: 2012,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Вернуться в 1988',
        2: 'https://kinoafisha.ua/upload/2018/10/films/8579/1ywsqo7fzel-naya-kniga.png',
        3: 62,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Снегопад',
        2: 'https://www.film.ru/sites/default/files/movies/posters/1628384-1579426.jpeg',
        3: 63,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Секс в большом городе',
        2: 'https://www.kino-teatr.ru/movie/posters/big/6/27846.jpg',
        3: 64,
        4: 1998,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Дарья',
        2: 'https://ovideo.ru/images/posters/0004/0916/0001.jpg',
        3: 65,
        4: 1997,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Мост',
        2: 'https://www.themoviedb.org/t/p/original/yK8kAJIotgjohJ0EK1ioimvIeOg.jpg',
        3: 66,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Американские боги',
        2: 'https://www.hdclub.ua/files/film/big/bigi4c8d6065076fc.jpg',
        3: 67,
        4: 1976,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Анатомия страсти',
        2: 'https://upload.wikimedia.org/wikipedia/ru/thumb/1/17/%D0%91%D1%80%D0%B8%D0%BB%D0%BB%D0%B8%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B0%D1%8F_%D1%80%D1%83%D0%BA%D0%B0_Poster.jpg/640px-%D0%91%D1%80%D0%B8%D0%BB%D0%BB%D0%B8%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B0%D1%8F_%D1%80%D1%83%D0%BA%D0%B0_Poster.jpg',
        3: 68,
        4: 2005,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Лучше звоните Солу',
        2: 'https://b1.filmpro.ru/c/85587.jpg',
        3: 69,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Алое сердце',
        2: 'https://upload.wikimedia.org/wikipedia/ru/9/93/%D0%94%D0%B5%D0%B2%D1%87%D0%B0%D1%82%D0%B0.jpg',
        3: 70,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Амфибия',
        2: 'https://www.kinodrive.com/img/review/0868131001447963089.jpg',
        3: 71,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Вечность',
        2: 'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/1629215-2003351.jpeg',
        3: 72,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Брошенный кролик',
        2: 'https://fs.kinomania.ru/file/film/2/dd/2dd44eeba0d4305929c02cef75a40b52.jpeg',
        3: 73,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Молодой Морс',
        2: 'https://www.film.ru/sites/default/files/movies/posters/1615348-827115.jpg',
        3: 74,
        4: 2012,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Конь БоДжек',
        2: 'https://upload.wikimedia.org/wikipedia/ru/1/18/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D0%BD%D1%8B%D0%B5_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B._%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4_III_%D0%9C%D0%B5%D1%81%D1%82%D1%8C_%D1%81%D0%B8%D1%82%D1%85%D0%BE%D0%B2%C2%BB.jpg',
        3: 75,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Нулевой пациент',
        2: 'https://cinema.mosfilm.ru/upload/resize_cache/iblock/102/450_450_0/1027b01eb281355446de713d99f4fd27.jpg',
        3: 76,
        4: 2022,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Симпсоны',
        2: 'https://kinogo.zone/uploads/posts/2019-07/1563109694-103330975-garri-potter-i-dary-smerti-chast-ii.jpg',
        3: 77,
        4: 2089,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Код Гиас: Восставший Лелуш',
        2: 'https://upload.wikimedia.org/wikipedia/ru/d/d1/Ratatui.jpg',
        3: 78,
        4: 2006,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Мастер Темного Пути',
        2: 'https://upload.wikimedia.org/wikipedia/ru/8/85/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%A1%D0%B5%D0%BC%D1%8C_%D0%B6%D0%B8%D0%B7%D0%BD%D0%B5%D0%B9.jpg',
        3: 79,
        4: 2018,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Город, в котором меня нет',
        2: 'https://upload.wikimedia.org/wikipedia/ru/a/a1/Godfather_2.jpg',
        3: 80,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Наши матери, наши отцы',
        2: 'https://www.kinonews.ru/insimgs/poster/poster39569_2.jpg',
        3: 81,
        4: 2013,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Крепость',
        2: 'https://www.film.ru/sites/default/files/movies/posters/3375329-777623.jpg',
        3: 82,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Десятое королевство',
        2: 'https://kinoyurco.com/ct/yur_id_10441.jpg',
        3: 83,
        4: 1999,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Прослушка',
        2: 'https://upload.wikimedia.org/wikipedia/ru/6/67/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%98%D0%B3%D1%80%D1%8B_%D1%80%D0%B0%D0%B7%D1%83%D0%BC%D0%B0%C2%BB.jpg',
        3: 84,
        4: 2002,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Меня зовут Эрл',
        2: 'https://upload.wikimedia.org/wikipedia/ru/a/a3/How_to_Train_Your_Dragon.jpg',
        3: 85,
        4: 2008,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Гуррен-Лаганн',
        2: 'https://upload.wikimedia.org/wikipedia/ru/3/3e/Pursuit_happyness_poster.jpg',
        3: 86,
        4: 2007,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Сыны анархии',
        2: 'https://upload.wikimedia.org/wikipedia/ru/4/45/Back-to-the-Future-Part-III-Rus-DVD.jpg',
        3: 87,
        4: 2008,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Дрянь',
        2: 'https://b1.filmpro.ru/c/32347.jpg',
        3: 88,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Доктор Кто',
        2: 'https://www.kino-teatr.ru/movie/posters/big/3/32913.jpg',
        3: 89,
        4: 2005,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Рим',
        2: 'https://i.pinimg.com/736x/d7/27/0b/d7270bf42869e3ffeb1cb53883494a.jpg',
        3: 90,
        4: 2005,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Лок и ключ',
        2: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/15157001125/100025668317b0.jpg',
        3: 91,
        4: 2005,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Леденящие душу приключения Сабрины',
        2: 'https://upload.wikimedia.org/wikipedia/ru/e/ee/Pirates3.jpg',
        3: 92,
        4: 2006,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Angry Birds. Пушистики',
        2: 'https://static.kinoafisha.info/k/movie_posters/canvas/800x1200/upload/movie_posters/2/3/7/2086732/7352c6746a51b0cd3736f0f20fdfab16.jpg',
        3: 93,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Война и мир',
        2: 'https://b1.filmpro.ru/c/33331.jpg',
        3: 94,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Императрица Ки',
        2: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Poster_-_Gone_With_the_Wind_01.jpg',
        3: 95,
        4: 2013,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Миллиарды',
        2: 'https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        3: 96,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Пацаны',
        2: 'https://www.themoviedb.org/t/p/original/mdy9mG31U7jSB8edfRELv53Yfjp.jpg',
        3: 97,
        4: 2019,
        5: 'https://t.me/bazaserial39/2',
    },
    ff = {
        1: 'Призраки дома на холме',
        2: 'https://upload.wikimedia.org/wikipedia/ru/6/60/Blind_side_poster.jpg',
        3: 98,
        4: 2018,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Острые козырьки',
        2: 'https://www.kinonews.ru/insimgs/2021/poster/poster103889_1.jpg',
        3: 99,
        4: 2013,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Убийство',
        2: 'https://upload.wikimedia.org/wikipedia/ru/0/04/Dead_Poets_Society.jpg',
        3: 100,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Спартак: Кровь и песок',
        2: 'https://upload.wikimedia.org/wikipedia/ru/4/47/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%98%D0%B4%D0%B8_%D0%B8_%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B8%C2%BB.jpg',
        3: 101,
        4: 2010,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Тед Лассо',
        2: 'https://epidemz.net.co/uploads/posts/2019-10/1572552906_the-art-of-racing-in-the-rain.jpg',
        3: 102,
        4: 2020,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Евангелион',
        2: 'https://upload.wikimedia.org/wikipedia/ru/f/f4/Disney_Aladdin_dvd.jpg',
        3: 103,
        4: 1995,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Твин Пикс',
        2: 'https://m.media-amazon.com/images/M/MV5BMjE0NDUyOTc2MV5BMl5BanBnXkFtZTgwODk2NzU3OTE@._V1_FMjpg_UX1000_.jpg',
        3: 104,
        4: 1995,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Бумажный дом',
        2: 'https://upload.wikimedia.org/wikipedia/ru/a/a7/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%22%D0%9F%D1%8F%D1%82%D1%8B%D0%B9_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%22.jpg',
        3: 105,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Викинги',
        2: 'https://www.film.ru/sites/default/files/movies/posters/_tmdb/3IgABJoFqQ0cuaE3gMlWUkrQ2AQ.jpg',
        3: 106,
        4: 2000,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Самурай Джек',
        2: 'https://upload.wikimedia.org/wikipedia/ru/9/95/The_Silence_Of_The_Lambs.jpg',
        3: 107,
        4: 2001,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Ванпанчмен',
        2: 'https://upload.wikimedia.org/wikipedia/ru/5/55/Koe_no_katachi_cover_01.326x486.jpg',
        3: 108,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'История девятихвостого лиса',
        2: 'https://upload.wikimedia.org/wikipedia/ru/3/31/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%A2%D0%B5%D1%80%D0%BC%D0%B8%D0%BD%D0%B0%D0%BB.jpg',
        3: 109,
        4: 2020,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Удивительная миссис Мейзел',
        2: 'https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_FMjpg_UX1000_.jpg',
        3: 110,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Хилер',
        2: 'https://upload.wikimedia.org/wikipedia/ru/4/41/Groundhog_Day.jpg',
        3: 111,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Ганнибал',
        2: 'https://upload.wikimedia.org/wikipedia/ru/a/ae/Spirit_dusha_prerii.jpg',
        3: 112,
        4: 1968,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Самурай Чамплу',
        2: 'https://upload.wikimedia.org/wikipedia/ru/d/d4/The_Hateful_Eight.jpg',
        3: 113,
        4: 2004,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Потомки солнца',
        2: 'https://upload.wikimedia.org/wikipedia/ru/5/54/%D0%9D%D0%B0_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B5_%D0%BA%D0%B0%D0%BA_%D0%BD%D0%B0_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B5_%28%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%29.jpg',
        3: 114,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Детство Шелдона',
        2: 'https://m.media-amazon.com/images/M/MV5BZmZlMGYxMTAtNDhhMi00ODBkLWI2YmItYTQ5YzA4NGUzNzlhXkEyXkFqcGdeQXVyNjUzNjIyNDU@._V1_.jpg',
        3: 115,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Корона',
        2: 'https://www.film.ru/sites/default/files/movies/posters/Se7en-10.jpg',
        3: 116,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Сверхъестественное',
        2: 'https://upload.wikimedia.org/wikipedia/ru/f/fc/Bicentennial_man_film_poster.jpg',
        3: 117,
        4: 2005,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Молодой Папа',
        2: 'https://b1.filmpro.ru/c/118292.jpg',
        3: 118,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Противостояние',
        2: 'https://b1.filmpro.ru/c/822235.jpg',
        3: 119,
        4: 1985,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Очень странные дела',
        2: 'https://upload.wikimedia.org/wikipedia/ru/d/dc/Hobbit_-_Desolation_of_Smaug.jpg',
        3: 120,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Бруклин 9-9',
        2: 'https://upload.wikimedia.org/wikipedia/ru/6/66/The_sixth_sense.jpg',
        3: 121,
        4: 2013,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Мир Дикого Запада',
        2: 'https://b1.filmpro.ru/c/111906.jpg',
        3: 122,
        4: 1972,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Уэйн',
        2: 'https://upload.wikimedia.org/wikipedia/ru/8/86/Pride_%26_Prejudice_2005.jpg',
        3: 123,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Мыслить как преступник',
        2: 'https://b1.filmpro.ru/c/10103.jpg',
        3: 124,
        4: 2005,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Декстер',
        2: 'https://b1.filmpro.ru/c/331458.jpg',
        3: 125,
        4: 2006,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Побег',
        2: 'https://irecommend.ru/sites/default/files/product-images/9218/1257254721_1.jpg',
        3: 126,
        4: 2005,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Древние',
        2: 'https://upload.wikimedia.org/wikipedia/ru/4/40/Up%28poster%29.jpg',
        3: 127,
        4: 2013,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Касл',
        2: 'https://upload.wikimedia.org/wikipedia/ru/0/05/Avengers-_Infinity_War_%28Original_Motion_Picture_Soundtrack%29.jpg',
        3: 128,
        4: 2009,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Крёстный отец Гарлема',
        2: 'https://lt3.pigugroup.eu/colours/501/113/13/50111313/dvd-filmas-isvirkscias-pasaulis-rus-2015-49386_xbig.jpg',
        3: 129,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Однажды ночью',
        2: 'https://www.kinonews.ru/insimgs/2018/poster/poster81595_1.jpg',
        3: 130,
        4: 1979,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Тайны Салфер-Спрингс',
        2: 'https://tvbesedka.com/upload/2018/7/30/22/28/27/ae1e8aa8-8f7c-427a-9ebe-99672b16d6ed.jpg',
        3: 131,
        4: 2021,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Спартак: Боги арены',
        2: 'https://i.pinimg.com/736x/e2/d6/e4/e2d6e4969a958cab16eb718c36a6f024--feature-film-film-festival.jpg',
        3: 132,
        4: 2010,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Почему женщины убивают',
        2: 'https://upload.wikimedia.org/wikipedia/ru/3/30/Iron_man_filmposter.jpg',
        3: 133,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Обмани меня',
        2: 'https://fs.kinomania.ru/file/film/5/ad/5ada8383f5cf765fcbb20ba8fe699c9e.jpeg',
        3: 134,
        4: 2009,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Разделение',
        2: 'https://upload.wikimedia.org/wikipedia/ru/5/5f/%D0%91%D1%80%D0%B5%D1%81%D1%82%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82%D1%8C_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg',
        3: 135,
        4: 2022,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Молокососы',
        2: 'https://upload.wikimedia.org/wikipedia/ru/2/28/Madagascar_film.jpg',
        3: 136,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Король шаманов',
        2: 'https://upload.wikimedia.org/wikipedia/ru/a/a0/The_Hobbit_The_Battle_of_the_Five_Armies.jpg',
        3: 137,
        4: 2001,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Волейбол!!',
        2: 'https://www.kino-teatr.ru/movie/posters/big/3/24333.jpg',
        3: 138,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Звездные врата: ЗВ-1',
        2: 'https://www.kinonews.ru/insimgs/poster/poster960_1.jpg',
        3: 139,
        4: 1997,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Виктория',
        2: 'https://upload.wikimedia.org/wikipedia/ru/d/d3/Million_Dollar_Baby_poster.jpg',
        3: 140,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Чем мы заняты в тени',
        2: 'https://www.kino-teatr.ru/movie/posters/big/1/27091.jpg',
        3: 141,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Форс-мажоры',
        2: 'https://upload.wikimedia.org/wikipedia/ru/c/ca/%D0%9C%D0%B0%D1%87%D0%B5%D1%85%D0%B0_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_1998%29.jpg',
        3: 142,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Доктор Стоун',
        2: 'https://www.kino-teatr.ru/movie/posters/big/9/84769.jpg',
        3: 143,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Чёрная любовь',
        2: 'https://www.kino-teatr.ru/movie/posters/big/5/17125.jpg',
        3: 144,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Книжный магазин Блэка',
        2: 'http://kinohdonline.net/uploads/posts/2019-11/15741203841tnop.jpeg',
        3: 145,
        4: 2000,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Парки и зоны отдыха',
        2: 'https://b1.filmpro.ru/c/32917.jpg',
        3: 146,
        4: 2009,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Гриффины',
        2: 'https://upload.wikimedia.org/wikipedia/ru/9/96/Memoirs_of_a_geisha_poster.jpg',
        3: 147,
        4: 1999,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Паразит: Учение о жизни',
        2: 'https://upload.wikimedia.org/wikipedia/ru/c/cc/Cast_Away.jpg',
        3: 148,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Сделано в Италии',
        2: 'https://b1.filmpro.ru/c/142548.jpg',
        3: 149,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Стальной алхимик',
        2: 'https://b1.filmpro.ru/c/205236.jpg',
        3: 150,
        4: 2003,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Кандис Ренуар',
        2: 'https://s1.afisha.ru/mediastorage/9e/31/b5a936dab9de4081b62534f2319e.jpg',
        3: 151,
        4: 2013,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Грань',
        2: 'https://b1.filmpro.ru/c/238398.jpg',
        3: 152,
        4: 2008,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Бюро',
        2: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/41/Foxandthehound.jpg/266px-Foxandthehound.jpg',
        3: 153,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Молодой Скала',
        2: 'https://b1.filmpro.ru/c/348988.jpg',
        3: 154,
        4: 2021,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Фарго',
        2: 'https://upload.wikimedia.org/wikipedia/ru/c/c1/%D0%9C%D1%83%D0%B6%D0%B8%D0%BA%D0%B8.jpg',
        3: 155,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Волчица и пряности',
        2: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Some_Like_It_Hot_%281959_poster%29.jpg',
        3: 156,
        4: 2008,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Врата Штейна',
        2: 'https://upload.wikimedia.org/wikipedia/ru/2/2a/Lilo_st_post.jpg',
        3: 157,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Тюдоры',
        2: 'https://gl.weburg.net/00/movies/6/25361/original/4131944.jpg',
        3: 158,
        4: 2007,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Нарко',
        2: 'https://upload.wikimedia.org/wikipedia/ru/0/04/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%22%D0%94%D0%BE%D0%B1%D1%80%D0%BE_%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%2C_%D0%B8%D0%BB%D0%B8_%D0%9F%D0%BE%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D0%BD%D0%B8%D0%BC_%D0%B2%D1%85%D0%BE%D0%B4_%D0%B2%D0%BE%D1%81%D0%BF%D1%80%D0%B5%D1%89%D1%91%D0%BD%22.jpg',
        3: 159,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Детективное агентство Дирка Джентли',
        2: 'https://upload.wikimedia.org/wikipedia/ru/4/4b/Avatar-2009.jpg',
        3: 160,
        4: 2020,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Приключения Джеки Чана',
        2: 'https://www.film.ru/sites/default/files/movies/posters/1627900-1607261.jpeg',
        3: 161,
        4: 1987,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Великолепные Медичи',
        2: 'https://fs.kinomania.ru/file/film/b/0f/b0f5754c527775a8a358415396156dfc.jpeg',
        3: 162,
        4: 2018,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Большая маленькая ложь',
        2: 'https://upload.wikimedia.org/wikipedia/ru/8/84/Byelorussian_station_poster.jpg',
        3: 163,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Мутанты черепашки ниндзя. Новые приключения!',
        2: 'https://allmults.org/img/p_big/1/145.jpg',
        3: 164,
        4: 2003,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Ход королевы',
        2: 'https://upload.wikimedia.org/wikipedia/ru/1/18/Raya_and_the_Last_Dragon.jpeg',
        3: 165,
        4: 2020,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Лютер',
        2: 'https://www.golddisk.ru/goods_img/86/8659.jpg',
        3: 166,
        4: 1985,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Тихий океан',
        2: 'https://citaty.info/files/posters/73365.jpg',
        3: 167,
        4: 2010,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Необычное такси',
        2: 'https://b1.filmpro.ru/c/25365.600xp.jpg',
        3: 168,
        4: 2021,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Родина',
        2: 'https://upload.wikimedia.org/wikipedia/ru/4/4c/Anastasia_cover.jpg',
        3: 169,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Истребитель демонов',
        2: 'https://i.pinimg.com/originals/35/d2/35/35d235e04205a18405b46d5e1f4aed0f.jpg',
        3: 170,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Вселенная Стивена',
        2: 'https://m.media-amazon.com/images/M/MV5BOTc1YThkMTYtNThiMy00NDcyLWI0ODYtOTY4ZWQwOGM4ZjVhXkEyXkFqcGdeQXVyNDM1ODc2NzE@._V1_FMjpg_UX1000_.jpg',
        3: 171,
        4: 2013,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Любовь. Смерть. Роботы',
        2: 'https://b1.filmpro.ru/c/9012.jpg',
        3: 172,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Шиттс Крик',
        2: 'https://b1.filmpro.ru/c/248848.jpg',
        3: 173,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Ходячие мертвецы',
        2: 'https://b1.filmpro.ru/c/43081.jpg',
        3: 174,
        4: 2010,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Твоя апрельская ложь',
        2: 'https://b1.filmpro.ru/c/262005.jpg',
        3: 175,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Вся правда о медведях',
        2: 'https://www.film.ru/sites/default/files/movies/posters/1615527-1584061.jpeg',
        3: 176,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Охотник за разумом',
        2: 'https://fs.kinomania.ru/file/film/5/f4/5f406a42adbf40fae0f9e85db1f07c5f.jpeg',
        3: 177,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Мерлин',
        2: 'https://softhedgehog.files.wordpress.com/2010/08/kinopoisk-ru-coach-carter-170230.jpg',
        3: 178,
        4: 2008,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Сексуальное просвещение',
        2: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%94%D0%B5%D0%BB%D0%BE_%D1%85%D1%80%D0%B0%D0%B1%D1%80%D1%8B%D1%85.jpg',
        3: 179,
        4: 2013,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Это мы',
        2: 'https://www.themoviedb.org/t/p/original/y9bPnWN7M0SmDvh4Nns0R4Jc2Jn.jpg',
        3: 180,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Сорвиголова',
        2: 'https://upload.wikimedia.org/wikipedia/ru/3/31/Hidden_Figures_poster.jpg',
        3: 181,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Агент времени',
        2: 'https://www.themoviedb.org/t/p/original/eAiYoTqn8I76eN37MFFBIGKgn.jpg',
        3: 182,
        4: 2021,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Отбросы',
        2: 'https://b1.filmpro.ru/c/362811.jpg',
        3: 183,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Когда нас видят',
        2: 'http://st-im.kinopoisk.ru/im/poster/2/1/3/kinopoisk.ru-Pokrovskiye-vorota-2139040.jpg',
        3: 184,
        4: 2018,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Это — Англия. Год 1990',
        2: 'https://music-ark.ru/upload/iblock/0a9/0a9252d500d8e93988b992ef9ef2f00a.jpg',
        3: 185,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Отряд Хваран',
        2: 'https://allmults.org/img/p_big/1/28.jpg',
        3: 186,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Сага о Винланде',
        2: 'https://kinogo.zone/uploads/posts/2019-05/1558421035-1005830911-mstiteli-final.jpg',
        3: 187,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Менталист',
        2: 'https://horrorzone.ru/uploads/_gallery/77871/dogville02.jpg',
        3: 188,
        4: 2008,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Секретные материалы',
        2: 'https://i.pinimg.com/736x/7b/53/19/7b53190ecb874d52b18784b79431fb16--robin-williams-.jpg',
        3: 189,
        4: 1993,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Остаться в живых',
        2: 'https://upload.wikimedia.org/wikipedia/ru/e/ea/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%A2%D0%B0%D0%BA%D1%81%D0%B8%D1%81%D1%82_%282017%29.jpg',
        3: 190,
        4: 2004,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Пространство',
        2: 'https://fs.kinomania.ru/file/film/0/03/003b36afc53d4e078a9df02e0e43fb28.jpeg',
        3: 191,
        4: 1985,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Моб Психо 100',
        2: 'https://www.themoviedb.org/t/p/original/3Cpm7AoKSSKorfPgVQR8NPHYPM1.jpg',
        3: 192,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Мейр из Исттауна',
        2: 'https://www.film.ru/sites/default/files/movies/posters/1616778-1688298.jpg',
        3: 193,
        4: 2021,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Мандалорец',
        2: 'https://www.themoviedb.org/t/p/original/qLoSkeASVb8Kw1ssOsUWbgWqP43.jpg',
        3: 194,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Бригада',
        2: 'https://www.hdclub.ua/files/film/big/bigi527ced07a8b07.jpg',
        3: 195,
        4: 2002,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Фея тяжёлой атлетики',
        2: 'https://b1.filmpro.ru/c/29212.jpg',
        3: 196,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Каратель',
        2: 'https://b1.filmpro.ru/c/5518.jpg',
        3: 197,
        4: 2004,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Звездные врата: Атлантида',
        2: 'https://fs.kinomania.ru/file/film/a/e5/ae59fd0064a25283be0f3384508a66a1.jpeg',
        3: 198,
        4: 2004,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Гримм',
        2: 'https://cdn.disney.ru/assets/0db2d138-f04b-45a0-a44c-e4ee8e5707a6.jpg',
        3: 199,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Новичок',
        2: 'http://www.hdkinoteatr.com/uploads/posts/2012-04/im4f97d2548e815.jpg',
        3: 200,
        4: 2018,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Кости',
        2: 'https://b1.filmpro.ru/c/335101.jpg',
        3: 201,
        4: 2005,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Утреннее шоу',
        2: 'https://kinoyurco.com/ct/yur_id_20315.jpg',
        3: 202,
        4: 2012,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Хеллсинг Ultimate',
        2: 'https://www.themoviedb.org/t/p/original/kdCLmAqoEoVP8zQKyaO5GDQZDDH.jpg',
        3: 203,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Спецназ',
        2: 'https://upload.wikimedia.org/wikipedia/ru/e/e4/La_La_Land.jpg',
        3: 204,
        4: 2002,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Паспорт свободы',
        2: 'https://upload.wikimedia.org/wikipedia/ru/3/3c/The_Avengers_2012_logo.jpg',
        3: 205,
        4: 2021,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Блудливая Калифорния',
        2: 'https://www.themoviedb.org/t/p/original/aGH2YhGAcA5VAlz4LsmKDAkjAfz.jpg',
        3: 206,
        4: 2007,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Силачка То Бон-сун',
        2: 'https://upload.wikimedia.org/wikipedia/ru/9/99/Goodfellas_Cover.jpg',
        3: 207,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Цветок зла',
        2: 'https://b1.filmpro.ru/c/38483.jpg',
        3: 208,
        4: 2020,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Больница Никербокер',
        2: 'https://upload.wikimedia.org/wikipedia/ru/c/cd/Indiana-jones-last-crusade-poster.jpg',
        3: 209,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Наследники',
        2: 'https://goblins-online.ru/images/poster/beshenye-psy.jpg',
        3: 210,
        4: 2018,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Очень приятно, Бог',
        2: 'https://www.kino-teatr.ru/movie/poster/92337/62754.jpg',
        3: 211,
        4: 2012,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Непобедимый',
        2: 'https://upload.wikimedia.org/wikipedia/ru/0/07/Troy-poster.jpg',
        3: 212,
        4: 2021,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Миротворец',
        2: 'https://b1.filmpro.ru/c/5517.jpg',
        3: 213,
        4: 2022,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Харли Квинн',
        2: 'https://m.media-amazon.com/images/M/MV5BN2Q5MjFmOWQtMjY2Mi00NDllLWIxNDAtZTdkYTc4MTg5NzRmXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        3: 214,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Американская история преступлений',
        2: 'https://b1.filmpro.ru/c/448035.jpg',
        3: 215,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Постановка',
        2: 'https://www.film.ru/sites/default/files/movies/posters/1610154-873100.jpg',
        3: 216,
        4: 2020,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Локи',
        2: 'https://b1.filmpro.ru/c/154927.jpg',
        3: 217,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Подпольная империя',
        2: 'https://www.film.ru/sites/default/files/movies/posters/Spider-Man-1.jpg',
        3: 218,
        4: 2010,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Чёрный клевер',
        2: 'https://upload.wikimedia.org/wikipedia/ru/6/64/Atonement_poster.jpg',
        3: 219,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Легенда синего моря',
        2: 'https://www.themoviedb.org/t/p/original/nIAnOoC9Q8udtQ7vakCu3gcJko7.jpg',
        3: 220,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Игра в кальмара',
        2: 'https://www.film.ru/sites/default/files/movies/posters/49609241-1218806.jpg',
        3: 221,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Озарк',
        2: 'https://arlekino40.ru/image/cache/data/kino/films/2015/uchenik-chudovishcha/8d8ba281-d2e4-461b-8cb2-830c07fb352a-340x510ac.jpg',
        3: 222,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Американский вандал',
        2: 'https://upload.wikimedia.org/wikipedia/ru/3/39/Gifted.jpg',
        3: 223,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Отель «Дель Луна»',
        2: 'https://upload.wikimedia.org/wikipedia/ru/0/0a/%D0%9B%D0%B5%D0%B2_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2016%29.jpg',
        3: 224,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Полдарк',
        2: 'https://b1.filmpro.ru/c/220292.jpg',
        3: 225,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Как избежать наказания за убийство',
        2: 'https://www.film.ru/sites/default/files/movies/posters/3079805-1038700.jpg',
        3: 226,
        4: 2003,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Банши',
        2: 'https://www.kino-teatr.ru/movie/posters/big/6/16766.jpg',
        3: 227,
        4: 2013,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Трепет сердца',
        2: 'https://upload.wikimedia.org/wikipedia/ru/f/fb/Aliens_poster.jpg',
        3: 228,
        4: 2022,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Незабытые',
        2: 'http://kinohdonline.net/uploads/posts/2020-05/15899320891a567c933fe229c7975d9e2dbbdc51dcb.jpeg',
        3: 229,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Служба новостей',
        2: 'https://upload.wikimedia.org/wikipedia/ru/a/a2/Bluffd.jpg',
        3: 230,
        4: 2012,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Будет больно',
        2: 'https://b1.filmpro.ru/c/8870.jpg',
        3: 231,
        4: 2022,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Созданный в Бездне',
        2: 'http://detfilm.ru/wp-content/uploads/2021/06/6008452767.jpg',
        3: 232,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Токийское восьмибалльное',
        2: 'https://1080kino.net/uploads/posts/2021-06/1622885187-gorod-geroev.jpg',
        3: 233,
        4: 2009,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Годы',
        2: 'https://upload.wikimedia.org/wikipedia/ru/9/92/Requiem_for_a_dream.jpg',
        3: 234,
        4: 2004,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'В Филадельфии всегда солнечно',
        2: 'https://www.kino-teatr.ru/movie/posters/big/8/134148.jpg',
        3: 235,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Звездные войны: Войны клонов',
        2: 'https://b1.filmpro.ru/c/536184.jpg',
        3: 236,
        4: 2003,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Шетланд',
        2: 'https://mf-static-ssl.more.tv/jackal/2584953/670c7970-97a7-4312-ac86-c9f3eb7e2b1a_W375_H532.jpg',
        3: 237,
        4: 2013,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Великолепный век',
        2: 'https://webflix.su/uploads/video_thumb/47.jpg',
        3: 238,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Великая',
        2: 'https://upload.wikimedia.org/wikipedia/ru/c/c0/%D0%9B%D0%B8%D1%86%D0%BE_%D1%81%D0%BE_%D1%88%D1%80%D0%B0%D0%BC%D0%BE%D0%BC_%28%D0%90%D0%BB%D1%8C_%D0%9F%D0%B0%D1%87%D0%B8%D0%BD%D0%BE%29.jpg',
        3: 239,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Эш против Зловещих мертвецов',
        2: 'https://upload.wikimedia.org/wikipedia/ru/9/97/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A1%D0%B0%D0%BC%D0%B0%D1%8F_%D0%BE%D0%B1%D0%B0%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%B8_%D0%BF%D1%80%D0%B8%D0%B2%D0%BB%D0%B5%D0%BA%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%C2%BB_%28%D0%A1%D0%A1%D0%A1%D0%A0%2C_1985%29.jpg',
        3: 240,
        4: 2021,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Тьма',
        2: 'https://static.kinoafisha.info/k/movie_posters/canvas/800x1200/upload/movie_posters/2/8/3/5382/8989c57d55de6626953d64eea0e492d5.jpg',
        3: 241,
        4: 2017,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Парад смерти',
        2: 'https://resizer.mail.ru/p/62ff6d-31e5-562d-a213-bbae3bc44ac6/AQACdbUeURctFGMkn2vng0BtS7pmsgTB0m6TkbX4UQkycf0sw3-pHQwjb7QCPTX8Mwu3fRDrPj4GPJb4Xl1qGyGpHZo.jpg',
        3: 242,
        4: 2015,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Сплетница',
        2: 'https://b1.filmpro.ru/c/6837.jpg',
        3: 243,
        4: 2007,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'В поле зрения',
        2: 'https://www.kino-teatr.ru/movie/posters/big/1/27661.jpg',
        3: 244,
        4: 2011,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Дневники вампира',
        2: 'https://upload.wikimedia.org/wikipedia/ru/a/a6/Toy_Story_1995_Poster.jpg',
        3: 245,
        4: 2009,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Засланец из космоса',
        2: 'http://img16.lostpic.net/2019/07/01/0c4e8aab54fc27808466bd665f6bbbb7.png',
        3: 246,
        4: 2021,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Гоморра',
        2: 'https://gl.weburg.net/00/movies/2/9861/original/410650.jpg',
        3: 247,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Все ненавидят Криса',
        2: 'https://b1.filmpro.ru/c/5526.jpg',
        3: 248,
        4: 2005,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Мунч',
        2: 'https://b1.filmpro.ru/c/89639.jpg',
        3: 249,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Эхо террора',
        2: 'https://cdn.kanobu.ru/anime/anime/a88d6a18-0699-4d24-ad30-c37bbd1da72f.jpg',
        3: 250,
        4: 2014,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Карточный домик',
        2: 'https://upload.wikimedia.org/wikipedia/ru/6/6e/Spider-Man_%E2%80%94_No_Way_Home_poster.jpg',
        3: 251,
        4: 2013,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Кастлвания',
        2: 'https://www.film.ru/sites/default/files/movies/posters/49637343-1491532.jpg',
        3: 252,
        4: 2020,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Благие знамения',
        2: 'https://azon.market/image/catalog/v_1/product/3/330/3299417.jpg',
        3: 253,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: '11.22.63',
        2: 'https://www.themoviedb.org/t/p/original/sjqnY19jQrIZI4cDRIpQD3O7efM.jpg',
        3: 254,
        4: 2016,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Чудотворцы',
        2: 'https://upload.wikimedia.org/wikipedia/ru/5/58/Luca_Poster.png',
        3: 255,
        4: 2019,
        5: 'gagagagagaga'
    },
    ff = {
        1: 'Видоизменённый углерод',
        2: 'https://st.kinobase.org/storage/360x534/posters/2020/10/c0379274ced366043056.jpg',
        3: 256,
        4: 2018,
        5: 'gagagagagaga'
    },


]



    let arr;
    let onclock
    let onc = 0;
    let arrTop = [];

    let div6;
    let kkkk;
    function topTest() {


        for (var kkk = 0; kkk < 30; kkk++) {

            kkkk = kkk+1;

            div = document.createElement('div');
            div.className = "alert";
            div.setAttribute("style", "display: inline-block; text-align: center; ");
            div.innerHTML = \`<div style="margin: 13px;"><strong>\` + kkkk + \`) \` + arrTop[kkk][1] + \`</strong> (\` + arrTop[kkk][4] + \`)</div><img src="img/serialkinopoisk/\`+ arrTop[kkk][3] +\`.jpg" width="450" class="alert2"><br>\`;
            document.body.append(div);
        }




    }

    function topTestFinal() {

        var removed1;

        for (var x = 0; x < 6; x++){

            for (var i = 0; i < 60; i++) {


                for (var n = 0; n < 60; n++) {

                    if ((arrTop[n] == arrTop[i]) && i > n) {
                        removed1 = arrTop.splice(i, 1);
                        console.log(arrTop);
                        console.log(removed1);
                    }
                }
            }

        }



        console.log(arrTop);

    }

    function showImg(arrFilm, i, onc) {


            if (onc == 0){

                onclock = \`buttonVib1(\` + i + \`, arrFilm2, arrFilm1)\`;

            }else{
                onclock = \`buttonVib1(\` + i + \`, arrFilm1, arrFilm2)\`;

            }




            div = document.createElement('div');
            div.className = "alert";
            div.setAttribute("style", "display: inline-block; text-align: center; ");
            div.innerHTML = \`<div style="margin: 13px;"><strong>\` + arrFilm[i][1] + \`</strong> (\` + arrFilm[i][4] + \`)</div>\`+ \`<img src="img/serialkinopoisk/\`+ arrFilm[i][3] +\`.jpg" onclick="\` + onclock + \`" width="450" class="alert2">\`;

            document.body.append(div);





    }

    function removeFunc() {

        let element = document.querySelector('div.alert');
        element.remove();

        let element2 = document.querySelector('div.alert');
        element2.remove();

    }





    arrFilm1 = arrFilm1.sort(() => Math.random() - 0.5)
    console.log(arrFilm1)
    console.log(arrFilm2)

    showImg(arrFilm1, 0, onc)
    showImg(arrFilm1, 1, onc)


    function buttonVib1(keyFilm, arrFilmAdd, arrFilmShift) {




        arrFilmAdd.push(arrFilmShift[keyFilm])

        if (countElementsArr < 100 && countElementsArr2 < 100){

            arrTop.push(arrFilmShift[keyFilm])



        }

        console.log(arrTop)


        arrFilmShift.shift()
        arrFilmShift.shift()

        console.log(arrFilmAdd)


        countElementsArr = arrFilmAdd.length;
        countElementsArr2 = arrFilmShift.length;
        console.log(countElementsArr)
        console.log(countElementsArr2)


        if ((countElementsArr == 512||countElementsArr == 128||countElementsArr == 32||countElementsArr == 8||countElementsArr == 2) && countElementsArr2 == 0) {


            onc = 1;

            buf(arrFilmAdd, arrFilmShift)

        } else if ((countElementsArr == 256||countElementsArr == 64||countElementsArr == 4) && countElementsArr2 == 0) {

            onc = 0;


            buf(arrFilmAdd, arrFilmShift)

        } else if (countElementsArr == 16 && countElementsArr2 == 0) {




            onc = 0;

            buf(arrFilmAdd, arrFilmShift)


        }  else if (countElementsArr == 1 && countElementsArr2 === 0) {

            console.log(arrTop)
            arrTop.reverse();
            console.log(arrTop)

            topTestFinal()

            alert('Победил ' + arrFilmAdd[0][1])

            removeFunc()
            topTest()



        } else {

            show2(arrFilmAdd, arrFilmShift)

        }
    }

    function buf(arrFilmAdd, arrFilmShift) {


        arrFilmShift = arrFilmAdd.sort(() => Math.random() - 0.5)
        arrFilmAdd = [];

        console.log(arrFilmAdd)
        console.log(arrFilmShift)


        show2(arrFilmAdd, arrFilmShift)

    }

    function show2(arrFilmAdd, arrFilmShift) {

        removeFunc()
        showImg(arrFilmShift, 0, onc)
        showImg(arrFilmShift, 1, onc)
    }




</script>







</body>
</html>
    
    
    
    
    
    `)

});

server.listen(3000, () => console.log('Сервер работает'));