const TelegramApi = require('node-telegram-bot-api')
const fs = require("fs");
const path = require("path");
const http = require('http')

const url = require('url');
const querystring = require('querystring');

const express = require('express');
const bodyParser = require('body-parser');






const token = '5522827980:AAH6vqztUiLLT4t92PoRvwr73dO6JvLPYNM'



const bot = new TelegramApi(token, {polling: true})

let FilmsKolVo = '201';//167

let SerKolVo = 61;

let arrUser = [

    789709197,
    596852094,
    1358083511,
    468855991,
    491033347,
    1277291144,
    1915978085,
    524326897,
    523004833,
    786665031,
    471850669,
    5335547065,
    516439587,
    5335547065,
    860775728,
    1031101850,
    972606242,
    1334307433,
    984257144,
    1514226815,
    786293819,
    522900537,
    507911289,
    754610676,
    1107248187,


];

let userArrNom = arrUser.length;

//console.log('User: ', userArrNom)





let ok;

let arrContent = require(path.resolve(__dirname, `content/allFilm.js`));

let arrContent2 = require(path.resolve(__dirname, `content/allSerial.js`));

let kinokomiksFilm = require(path.resolve(__dirname, `kinokomiksFilm.js`));

let newFilm = require(path.resolve(__dirname, `newFilm.js`));

let rusFilm = require(path.resolve(__dirname, `rusFilm.js`));

let myltFilm = require(path.resolve(__dirname, `myltFilm.js`));

let ogoFilm = require(path.resolve(__dirname, `ogoFilm.js`));

let kniga1 = require(path.resolve(__dirname, `kniga1.js`));


let  arrContent3 = {};





for (let iobj = 100; iobj < 160; iobj++) {


    fs.readFile(path.resolve(__dirname, `content/film/${iobj}/nameprov.txt`), 'utf8', function(err, data1){

        fs.readFile(path.resolve(__dirname, `content/film/${iobj}/name.txt`), 'utf8', function(err, data2){

            fs.readFile(path.resolve(__dirname, `content/film/${iobj}/god.txt`), 'utf8', function(err, data3){

                fs.readFile(path.resolve(__dirname, `content/film/${iobj}/http.txt`), 'utf8', function(err, data4){


            arrContent3[iobj]= {};

            arrContent3[iobj][1] = iobj;
            arrContent3[iobj][2] = data1;
            arrContent3[iobj][3] = data2;
            arrContent3[iobj][4] = data3;
            arrContent3[iobj][5] = data4;



                //console.log(arrContent3[101])



    })})})})




}







let arrStr;

let episodeNom;

let Home;


function home(but1, but2) {

    Home = {text: but1, callback_data: but2};

}



home(`❇ Главная`, `Home`)






arrStr = [];
let arrStrSer = [];

let nomStr;

let nomStr2;



let SerFilmButton = [];
let SerSerButton = [];
let filmKol = Object.keys(arrContent).length;
let serKol = Object.keys(arrContent2).length;

//-----------------------Страницы поиска фильмов---------------------------


for (let SerFilm = 10; SerFilm <= filmKol; SerFilm++) {

    SerFilmButton[SerFilm] = {

        reply_markup: JSON.stringify({

            inline_keyboard: [


                [{text: `${arrContent[SerFilm][3]}`, callback_data: `10${arrContent[SerFilm][1]}`}],



            ]

        })

    }

}





//-----------------------Страницы поиска сериалов---------------------------


for (let SerSer = 10; SerSer <= serKol; SerSer++) {

    SerSerButton[SerSer] = {

        reply_markup: JSON.stringify({

            inline_keyboard: [


                [{text: `${arrContent2[SerSer][3]}`, callback_data: `${arrContent[SerSer][1]}:1`}],



            ]

        })

    }

}


//-----------------------Страницы фильмов---------------------------
for (nomStr = 1; nomStr < 25; nomStr++) {




    arrStr[nomStr] = {

        reply_markup: JSON.stringify({

            inline_keyboard: [


                [{text: `${arrContent[(nomStr-1)*10+1][1]}) ${arrContent[nomStr*10][3]}`, callback_data: `10${arrContent[nomStr*10][1]}`}],
                [{text: `${arrContent[(nomStr-1)*10+2][1]}) ${arrContent[nomStr*10+1][3]}`, callback_data: `10${arrContent[nomStr*10+1][1]}`}],
                [{text: `${arrContent[(nomStr-1)*10+3][1]}) ${arrContent[nomStr*10+2][3]}`, callback_data: `10${arrContent[nomStr*10+2][1]}`}],
                [{text: `${arrContent[(nomStr-1)*10+4][1]}) ${arrContent[nomStr*10+3][3]}`, callback_data: `10${arrContent[nomStr*10+3][1]}`}],
                [{text: `${arrContent[(nomStr-1)*10+5][1]}) ${arrContent[nomStr*10+4][3]}`, callback_data: `10${arrContent[nomStr*10+4][1]}`}],
                [{text: `${arrContent[(nomStr-1)*10+6][1]}) ${arrContent[nomStr*10+5][3]}`, callback_data: `10${arrContent[nomStr*10+5][1]}`}],
                [{text: `${arrContent[(nomStr-1)*10+7][1]}) ${arrContent[nomStr*10+6][3]}`, callback_data: `10${arrContent[nomStr*10+6][1]}`}],
                [{text: `${arrContent[(nomStr-1)*10+8][1]}) ${arrContent[nomStr*10+7][3]}`, callback_data: `10${arrContent[nomStr*10+7][1]}`}],
                [{text: `${arrContent[(nomStr-1)*10+9][1]}) ${arrContent[nomStr*10+8][3]}`, callback_data: `10${arrContent[nomStr*10+8][1]}`}],
                [{text: `${arrContent[(nomStr-1)*10+10][1]}) ${arrContent[nomStr*10+9][3]}`, callback_data: `10${arrContent[nomStr*10+9][1]}`}],

                [{text: `◀ Назад`, callback_data: `strFilm${nomStr-1}`},{text: `Вперед ▶`, callback_data: `strFilm${nomStr+1}`}],

                [{text: `⏮ Выбрать категорию`, callback_data: `Kategories`}],

                [Home],





            ]

        })

    }

}

//-----------------------Страницы сериалов---------------------------
for (nomStr2 = 1; nomStr2 < 7; nomStr2++) {



    arrStrSer[nomStr2] = {

        reply_markup: JSON.stringify({

            inline_keyboard: [


                [{text: `${arrContent2[nomStr2*10][3]}`, callback_data: `${arrContent2[nomStr2*10][1]}:1`}],
                [{text: `${arrContent2[nomStr2*10+1][3]}`, callback_data: `${arrContent2[nomStr2*10+1][1]}:1`}],
                [{text: `${arrContent2[nomStr2*10+2][3]}`, callback_data: `${arrContent2[nomStr2*10+2][1]}:1`}],
                [{text: `${arrContent2[nomStr2*10+3][3]}`, callback_data: `${arrContent2[nomStr2*10+3][1]}:1`}],
                [{text: `${arrContent2[nomStr2*10+4][3]}`, callback_data: `${arrContent2[nomStr2*10+4][1]}:1`}],
                [{text: `${arrContent2[nomStr2*10+5][3]}`, callback_data: `${arrContent2[nomStr2*10+5][1]}:1`}],
                [{text: `${arrContent2[nomStr2*10+6][3]}`, callback_data: `${arrContent2[nomStr2*10+6][1]}:1`}],
                [{text: `${arrContent2[nomStr2*10+7][3]}`, callback_data: `${arrContent2[nomStr2*10+7][1]}:1`}],
                [{text: `${arrContent2[nomStr2*10+8][3]}`, callback_data: `${arrContent2[nomStr2*10+8][1]}:1`}],
                [{text: `${arrContent2[nomStr2*10+9][3]}`, callback_data: `${arrContent2[nomStr2*10+9][1]}:1`}],



                [{text: `◀ Назад`, callback_data: `strSer${nomStr2-1}`},{text: `Вперед ▶`, callback_data: `strSer${nomStr2+1}`}],

                [Home],





            ]

        })

    }

}



let nomContent;
//-----------------------Названия кнопок---------------------------

let buttonArr = {};

for (let butArrMas = 1; butArrMas <= 1000; butArrMas++){

    buttonArr[butArrMas] = [];

}







//--------------------------------Кнопки сериалов-----------------------------

for (nomContent = 10; nomContent <= serKol; nomContent++) {


    let episodeMax = Object.keys(arrContent2[nomContent][4]).length;



    for (let episodeNom = 1; episodeNom <= 1000; episodeNom++) {

        buttonArr[nomContent][episodeNom] = {

            reply_markup: JSON.stringify({

                inline_keyboard: [

                    [{text: `◀ Назад`, callback_data: `${nomContent}:${episodeNom-1}`}, {text: `Вперед ▶`, callback_data: `${nomContent}:${episodeNom+1}`}],

                    [Home],


                ]

            })

        }


    }

}


















//--------------------------------Главная-----------------------------

const ButtonStart = {

    reply_markup: JSON.stringify({

        inline_keyboard: [



            [{text: `🎬 Фильмы`, callback_data: 'Kategories'}, {text: `📺 Сериалы`, callback_data: 'strSer1'}],

            [{text: '🔶 Другие функции', callback_data: 'drug'}],


        ]

    })

}

//${FilmsKolVo}${SerKolVo}

const ButtonDrug = {

    reply_markup: JSON.stringify({

        inline_keyboard: [




            [{text: '🎲 Рандомный фильм', callback_data: 'randFilm'}, {text: '🎲 Рандомный сериал', callback_data: 'randSer'}],
            [{text: '🗂 Закладки (в разработке)', callback_data: 'zakladki'}],
            [{text: '📤 Связь с разработчиком', callback_data: 'Prikmmo9'}],


            [Home],


        ]

    })

}

//--------------------------------Категории фильмов-----------------------------
let kategoriesFilm = {};


kategoriesFilm[0]  = {

    reply_markup: JSON.stringify({

        inline_keyboard: [


            [{text: `🎬 Все фильмы`, callback_data: `strFilm1`}],
            [{text: `🔥 Лучшее по мнению бота`, callback_data: `ogoFilmBut1`}],
            [{text: `🆕 Новинки 2022`, callback_data: `newFilmBut1`}],
            [{text: `🏰 Мультфильмы`, callback_data: `myltFilmBut1`}],
            [{text: `🗯 Кинокомиксы`, callback_data: `kinokomiksFilmBut1`}],
            [{text: `🇷🇺 Русское`, callback_data: `rusFilmBut1`}],
            [{text: `🤣 Комедии (в разработке)`, callback_data: `strFilmBut1`}],
            [{text: `👻 Ужастики (в разработке)`, callback_data: `strFilmBut1`}],



            [Home],



        ]

    })

}

//--------------------------------Кинокомиксы страницы-----------------------------
let kinokomiksFilmBut = [];
for (nomStr = 1; nomStr < 30; nomStr++) {




    kinokomiksFilmBut[nomStr] = {

        reply_markup: JSON.stringify({

            inline_keyboard: [


                [{text: `${kinokomiksFilm[nomStr*10][3]}`, callback_data: `10${kinokomiksFilm[nomStr*10][1]}`}],
                [{text: `${kinokomiksFilm[nomStr*10+1][3]}`, callback_data: `10${kinokomiksFilm[nomStr*10+1][1]}`}],
                [{text: `${kinokomiksFilm[nomStr*10+2][3]}`, callback_data: `10${kinokomiksFilm[nomStr*10+2][1]}`}],
                [{text: `${kinokomiksFilm[nomStr*10+3][3]}`, callback_data: `10${kinokomiksFilm[nomStr*10+3][1]}`}],
                [{text: `${kinokomiksFilm[nomStr*10+4][3]}`, callback_data: `10${kinokomiksFilm[nomStr*10+4][1]}`}],
                [{text: `${kinokomiksFilm[nomStr*10+5][3]}`, callback_data: `10${kinokomiksFilm[nomStr*10+5][1]}`}],
                [{text: `${kinokomiksFilm[nomStr*10+6][3]}`, callback_data: `10${kinokomiksFilm[nomStr*10+6][1]}`}],
                [{text: `${kinokomiksFilm[nomStr*10+7][3]}`, callback_data: `10${kinokomiksFilm[nomStr*10+7][1]}`}],
                [{text: `${kinokomiksFilm[nomStr*10+8][3]}`, callback_data: `10${kinokomiksFilm[nomStr*10+8][1]}`}],
                [{text: `${kinokomiksFilm[nomStr*10+9][3]}`, callback_data: `10${kinokomiksFilm[nomStr*10+9][1]}`}],

                [{text: `◀ Назад`, callback_data: `kinokomiksFilmBut${nomStr-1}`},{text: `Вперед ▶`, callback_data: `kinokomiksFilmBut${nomStr+1}`}],

                [{text: `⏮ Выбрать категорию`, callback_data: `Kategories`}],

                [Home],





            ]

        })

    }

}
//--------------------------------Страницы Новых фильмов-----------------------------
let newFilmBut = [];
for (nomStr = 1; nomStr < 30; nomStr++) {




    newFilmBut[nomStr] = {

        reply_markup: JSON.stringify({

            inline_keyboard: [


                [{text: `${newFilm[nomStr*10][3]}`, callback_data: `10${newFilm[nomStr*10][1]}`}],
                [{text: `${newFilm[nomStr*10+1][3]}`, callback_data: `10${newFilm[nomStr*10+1][1]}`}],
                [{text: `${newFilm[nomStr*10+2][3]}`, callback_data: `10${newFilm[nomStr*10+2][1]}`}],
                [{text: `${newFilm[nomStr*10+3][3]}`, callback_data: `10${newFilm[nomStr*10+3][1]}`}],
                [{text: `${newFilm[nomStr*10+4][3]}`, callback_data: `10${newFilm[nomStr*10+4][1]}`}],
                [{text: `${newFilm[nomStr*10+5][3]}`, callback_data: `10${newFilm[nomStr*10+5][1]}`}],
                [{text: `${newFilm[nomStr*10+6][3]}`, callback_data: `10${newFilm[nomStr*10+6][1]}`}],
                [{text: `${newFilm[nomStr*10+7][3]}`, callback_data: `10${newFilm[nomStr*10+7][1]}`}],
                [{text: `${newFilm[nomStr*10+8][3]}`, callback_data: `10${newFilm[nomStr*10+8][1]}`}],
                [{text: `${newFilm[nomStr*10+9][3]}`, callback_data: `10${newFilm[nomStr*10+9][1]}`}],

                [{text: `◀ Назад`, callback_data: `newFilmBut${nomStr-1}`},{text: `Вперед ▶`, callback_data: `newFilmBut${nomStr+1}`}],

                [{text: `⏮ Выбрать категорию`, callback_data: `Kategories`}],

                [Home],





            ]

        })

    }

}
//--------------------------------Страницы русских фильмов-----------------------------
let rusFilmBut = [];
for (nomStr = 1; nomStr < 30; nomStr++) {




    rusFilmBut[nomStr] = {

        reply_markup: JSON.stringify({

            inline_keyboard: [


                [{text: `${rusFilm[nomStr*10][3]}`, callback_data: `10${rusFilm[nomStr*10][1]}`}],
                [{text: `${rusFilm[nomStr*10+1][3]}`, callback_data: `10${rusFilm[nomStr*10+1][1]}`}],
                [{text: `${rusFilm[nomStr*10+2][3]}`, callback_data: `10${rusFilm[nomStr*10+2][1]}`}],
                [{text: `${rusFilm[nomStr*10+3][3]}`, callback_data: `10${rusFilm[nomStr*10+3][1]}`}],
                [{text: `${rusFilm[nomStr*10+4][3]}`, callback_data: `10${rusFilm[nomStr*10+4][1]}`}],
                [{text: `${rusFilm[nomStr*10+5][3]}`, callback_data: `10${rusFilm[nomStr*10+5][1]}`}],
                [{text: `${rusFilm[nomStr*10+6][3]}`, callback_data: `10${rusFilm[nomStr*10+6][1]}`}],
                [{text: `${rusFilm[nomStr*10+7][3]}`, callback_data: `10${rusFilm[nomStr*10+7][1]}`}],
                [{text: `${rusFilm[nomStr*10+8][3]}`, callback_data: `10${rusFilm[nomStr*10+8][1]}`}],
                [{text: `${rusFilm[nomStr*10+9][3]}`, callback_data: `10${rusFilm[nomStr*10+9][1]}`}],

                [{text: `◀ Назад`, callback_data: `rusFilmBut${nomStr-1}`},{text: `Вперед ▶`, callback_data: `rusFilmBut${nomStr+1}`}],

                [{text: `⏮ Выбрать категорию`, callback_data: `Kategories`}],

                [Home],





            ]

        })

    }

}
//--------------------------------Страницы мультфильмов-----------------------------
let myltFilmBut = [];
for (nomStr = 1; nomStr < 30; nomStr++) {




    myltFilmBut[nomStr] = {

        reply_markup: JSON.stringify({

            inline_keyboard: [


                [{text: `${myltFilm[nomStr*10][3]}`, callback_data: `10${myltFilm[nomStr*10][1]}`}],
                [{text: `${myltFilm[nomStr*10+1][3]}`, callback_data: `10${myltFilm[nomStr*10+1][1]}`}],
                [{text: `${myltFilm[nomStr*10+2][3]}`, callback_data: `10${myltFilm[nomStr*10+2][1]}`}],
                [{text: `${myltFilm[nomStr*10+3][3]}`, callback_data: `10${myltFilm[nomStr*10+3][1]}`}],
                [{text: `${myltFilm[nomStr*10+4][3]}`, callback_data: `10${myltFilm[nomStr*10+4][1]}`}],
                [{text: `${myltFilm[nomStr*10+5][3]}`, callback_data: `10${myltFilm[nomStr*10+5][1]}`}],
                [{text: `${myltFilm[nomStr*10+6][3]}`, callback_data: `10${myltFilm[nomStr*10+6][1]}`}],
                [{text: `${myltFilm[nomStr*10+7][3]}`, callback_data: `10${myltFilm[nomStr*10+7][1]}`}],
                [{text: `${myltFilm[nomStr*10+8][3]}`, callback_data: `10${myltFilm[nomStr*10+8][1]}`}],
                [{text: `${myltFilm[nomStr*10+9][3]}`, callback_data: `10${myltFilm[nomStr*10+9][1]}`}],

                [{text: `◀ Назад`, callback_data: `myltFilmBut${nomStr-1}`},{text: `Вперед ▶`, callback_data: `myltFilmBut${nomStr+1}`}],

                [{text: `⏮ Выбрать категорию`, callback_data: `Kategories`}],

                [Home],





            ]

        })

    }

}
//--------------------------------Страницы Огоньки-----------------------------
let ogoFilmBut = [];
for (nomStr = 1; nomStr < 30; nomStr++) {




    ogoFilmBut[nomStr] = {

        reply_markup: JSON.stringify({

            inline_keyboard: [


                [{text: `${ogoFilm[nomStr*10][3]}`, callback_data: `10${ogoFilm[nomStr*10][1]}`}],
                [{text: `${ogoFilm[nomStr*10+1][3]}`, callback_data: `10${ogoFilm[nomStr*10+1][1]}`}],
                [{text: `${ogoFilm[nomStr*10+2][3]}`, callback_data: `10${ogoFilm[nomStr*10+2][1]}`}],
                [{text: `${ogoFilm[nomStr*10+3][3]}`, callback_data: `10${ogoFilm[nomStr*10+3][1]}`}],
                [{text: `${ogoFilm[nomStr*10+4][3]}`, callback_data: `10${ogoFilm[nomStr*10+4][1]}`}],
                [{text: `${ogoFilm[nomStr*10+5][3]}`, callback_data: `10${ogoFilm[nomStr*10+5][1]}`}],
                [{text: `${ogoFilm[nomStr*10+6][3]}`, callback_data: `10${ogoFilm[nomStr*10+6][1]}`}],
                [{text: `${ogoFilm[nomStr*10+7][3]}`, callback_data: `10${ogoFilm[nomStr*10+7][1]}`}],
                [{text: `${ogoFilm[nomStr*10+8][3]}`, callback_data: `10${ogoFilm[nomStr*10+8][1]}`}],
                [{text: `${ogoFilm[nomStr*10+9][3]}`, callback_data: `10${ogoFilm[nomStr*10+9][1]}`}],

                [{text: `◀ Назад`, callback_data: `ogoFilmBut${nomStr-1}`},{text: `Вперед ▶`, callback_data: `ogoFilmBut${nomStr+1}`}],

                [{text: `⏮ Выбрать категорию`, callback_data: `Kategories`}],

                [Home],





            ]

        })

    }

}
//------------------------сервер-------------------------------------
const server = http.createServer((req, res) => {

    let rawUrl = req.url;

    let parsedUrl = url.parse(rawUrl);
    let parsedQs = querystring.parse(parsedUrl.query);




    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {



        res.writeHead(200, {

            'Content-type': 'text/html'

        })




        res.end(`
        
        
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Админка</title>

    <!-- Bootstrap CSS (jsDelivr CDN) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- Bootstrap Bundle JS (jsDelivr CDN) -->
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</head>
<body>

<script src="/content/allFilm.js"></script>

<script>



    console.log('arrContent')

    let strGET = window.location.search.replace( '?', '');



    let form = document.createElement('form');
    form.action = 'http://localhost:3000/';
    form.method = 'GET';

    form.innerHTML = '<input name="1" value="">';

    // перед отправкой формы, её нужно вставить в документ
    document.body.append(form);




    let buttonElement1 = document.createElement('button');
    buttonElement1.setAttribute("onClick", 'poiskFilm()');
    buttonElement1.textContent = "Отправить";
    buttonElement1.className = "alert";
    document.body.append(buttonElement1);

    let tri = 66;



    let div = document.createElement('div');
    div.className = "alert";
    div.setAttribute("style", "display: inline-block; text-align: center; ");
    div.innerHTML = '66';
    document.body.append(div);










    function poiskFilm() {


        form.submit();






    }






</script>







</body>
</html>

        
        
        
        
        
        `)


    })











})





server.listen(3000, () => {

    console.log('Сервер запущен...')
})















//-------------------------------------------------------------



bot.setMyCommands([

    {command: '/start', description: 'Начальное приветствие'},
    {command: '/2011', description: 'Аркейн (2021)'},
    {command: '/2012', description: 'Пацаны (2019)'},
    {command: '/1051', description: 'Черный телефон (2022)'},


])



bot.on('message', async msg => {
    const text2 = msg.text;
    const chatId = msg.chat.id;

    let text;




    if (typeof text2 == "string" ){

        text = text2.toLowerCase();


        console.log(chatId, msg.from.first_name, msg.from.last_name, msg.from.username, 'text: ', text)

        if(chatId != 789709197){

            bot.sendMessage(5434942058, `${chatId}:${msg.from.first_name}:${msg.from.last_name}:${msg.from.username}: text: ${text}`);

        }




    }else{text = '/start'}






    if (text === '/start') {


        bot.sendMessage(chatId, `Добро пожаловать ${msg.from.first_name}, напиши мне название фильма или сериала:`, ButtonStart);
        //await bot.sendSticker(chatId, `https://tlgrm.ru/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/8.webp`);




        fs.stat(path.resolve(__dirname, `user/id/${chatId}`), function(err, stats) {
            if (err) {

                fs.readFile(path.resolve(__dirname, `user/userNam.txt`), 'utf8', function(err, data){

                    data++;

                    console.log(data)

                    fs.writeFile(path.resolve(__dirname, `user/userNam.txt`), `${data}`, () => {})

                    fs.mkdirSync(path.resolve(__dirname, `user/id/${chatId}`), {recursive: true})

                    fs.writeFile(path.resolve(__dirname, `user/id/${chatId}/first_name.txt`), `${msg.from.first_name}`, () => {})

                    fs.writeFile(path.resolve(__dirname, `user/id/${chatId}/last_name.txt`), `${msg.from.last_name}`, () => {})

                    fs.writeFile(path.resolve(__dirname, `user/id/${chatId}/username.txt`), `${msg.from.username}`, () => {})

                    console.log(`Добавлен пользователь #${data}: ${chatId}:${msg.from.username}:${msg.from.first_name} ${msg.from.last_name}`);



                    bot.sendMessage(5434942058, `Добавлен пользователь #${data}: ${chatId}:${msg.from.username}:${msg.from.first_name} ${msg.from.last_name}`);

                });



            } else {


                fs.mkdirSync(path.resolve(__dirname, `user/id/${chatId}`), {recursive: true})

                fs.writeFile(path.resolve(__dirname, `user/id/${chatId}/first_name.txt`), `${msg.from.first_name}`, () => {})

                fs.writeFile(path.resolve(__dirname, `user/id/${chatId}/last_name.txt`), `${msg.from.last_name}`, () => {})

                fs.writeFile(path.resolve(__dirname, `user/id/${chatId}/username.txt`), `${msg.from.username}`, () => {})


                fs.readFile(path.resolve(__dirname, `user/userNam.txt`), 'utf8', function(err, data){


                });



















            }
        });




















    }








    if (text === 'массовая рассылка' && chatId === 789709197) {

        fs.readFile(`user/userNam.txt`, 'utf8', function(err, data){

            bot.sendMessage(789709197, `Сообщение отправлено #${data} пользователям`);

        });

        fs.readdir(`user/id`, (err, files) => {
            files.forEach(file => {


                console.log(file)
                bot.sendMessage(file, `Подписывайтесь на наш канал, на случай блокировки бота там будет ссылка на нового: https://t.me/FilmBotOnline`, ButtonStart);



            });
        })


    }

    if (text == '777') {

        //-----------------------------------------------------------------------
        bot.sendMessage(1448288949, `Мы заметили, что вы искали "клон", возможно вы имели ввиду это:`);
        bot.sendMessage(1448288949, `🔎 Найдено`, SerFilmButton[133]);
        bot.sendMessage(1448288949, `🔎 Найдено`, SerFilmButton[134]);
        bot.sendMessage(1448288949, `🔎 Найдено`, SerSerButton[60]);
        //SerFilmButton
        //SerSerButton
        //789709197


    }

    for (let i = 0; i < userArrNom; i++) {


        if (text == arrUser[i]) {

            bot.sendMessage(789709197, `true`);

        }

    }

    if (text === 'ывиывиывиываиывиаываивыаиываиываи' && chatId === 789709197) {


        for (let i = 0; i < userArrNom; i++) {

            bot.sendMessage(arrUser[i], `Мне пришлось многое переделать, нажмите пожалуйста /start для корректной работы бота, спасибо`, ButtonStart);



        }

    }










    function textProv(ind) {

        if (text === arrContent[ind][2]||arrContent[ind][2].includes(text)||text == `10${arrContent[ind][1]}`||text === `/10${arrContent[ind][1]}`) {

            //bot.sendMessage(chatId, `${arrContent[ind][4]}\n${arrContent[ind][3]}\nНомер этого фильма для поиска: 10${arrContent[ind][1]}`);
            //bot.sendPhoto(chatId, `img/film/${arrContent[ind][1]}.jpg`, ButtonStart);


             bot.sendMessage(chatId, `🔎 Найдено`, SerFilmButton[ind]);


        }

    }



    var poiskFilmNomStr = Object.keys(arrContent).length/10;



    for (let nomStr = 1; nomStr < poiskFilmNomStr; nomStr++) {

        textProv(nomStr*10)
        textProv(nomStr*10+1)
        textProv(nomStr*10+2)
        textProv(nomStr*10+3)
        textProv(nomStr*10+4)
        textProv(nomStr*10+5)
        textProv(nomStr*10+6)
        textProv(nomStr*10+7)
        textProv(nomStr*10+8)
        textProv(nomStr*10+9)
    }



    function textProvSer(ind) {

        if (text === arrContent2[ind][2]||arrContent2[ind][2].includes(text)||text == `20${arrContent2[ind][1]}`||text === `/20${arrContent2[ind][1]}`) {

            //bot.sendMessage(chatId, `${arrContent2[ind][4][1]}\n${arrContent2[ind][3]}\nНомер этого сериала для поиска: 20${arrContent2[ind][1]}`, ButtonHomeSer);

            bot.sendMessage(chatId, `🔎 Найдено`, SerSerButton[ind]);


        }

    }

    for (let nomStr = 1; nomStr <= 9; nomStr++) {

        textProvSer(nomStr*10)
        textProvSer(nomStr*10+1)
        textProvSer(nomStr*10+2)
        textProvSer(nomStr*10+3)
        textProvSer(nomStr*10+4)
        textProvSer(nomStr*10+5)
        textProvSer(nomStr*10+6)
        textProvSer(nomStr*10+7)
        textProvSer(nomStr*10+8)
        textProvSer(nomStr*10+9)
    }




})






bot.on('callback_query', msg => {

    const data = msg.data;
    const chatId = msg.message.chat.id;






    console.log(chatId,msg.from.first_name, msg.from.last_name, msg.from.username,'data: ', data)

    if(chatId != 789709197){

        bot.sendMessage(5434942058, `${chatId}:${msg.from.first_name}:${msg.from.last_name}:${msg.from.username}: data: ${data}`);

    }









    if (data == 'Prikmmo9'){


        bot.sendMessage(chatId, `https://t.me/Prikmmo9`, ButtonStart);




    }

    if (data == 'Kategories'){


        bot.sendMessage(chatId, `Категории фильмов:`, kategoriesFilm[0]);




    }


//-------------------------------Кинокомиксы фильмы вывод кнопок-------------------------------
    for (nomStr = 1; nomStr <= 110; nomStr++) {


        if (data == `kinokomiksFilmBut${nomStr}`){

            fs.appendFile(path.resolve(__dirname, `user/${chatId}/log.txt`), `kinokomiksFilmBut${nomStr}_`, () => {})

            return  bot.sendMessage(chatId, `${nomStr} страница: `, kinokomiksFilmBut[nomStr]);


        }
    }
//-------------------------------Новинки кино вывод кнопок-------------------------------
    for (nomStr = 1; nomStr <= 110; nomStr++) {


        if (data == `newFilmBut${nomStr}`){

            fs.appendFile(path.resolve(__dirname, `user/${chatId}/log.txt`), `newFilmBut${nomStr}_`, () => {})

            return  bot.sendMessage(chatId, `${nomStr} страница: `, newFilmBut[nomStr]);


        }
    }
//-------------------------------Русские фильмы вывод кнопок-------------------------------
    for (nomStr = 1; nomStr <= 110; nomStr++) {


        if (data == `rusFilmBut${nomStr}`){

            fs.appendFile(path.resolve(__dirname, `user/${chatId}/log.txt`), `rusFilmBut${nomStr}_`, () => {})

            return  bot.sendMessage(chatId, `${nomStr} страница: `, rusFilmBut[nomStr]);


        }
    }
    //-------------------------------Мультфильмы вывод кнопок-------------------------------
    for (nomStr = 1; nomStr <= 110; nomStr++) {


        if (data == `myltFilmBut${nomStr}`){

            fs.appendFile(path.resolve(__dirname, `user/${chatId}/log.txt`), `myltFilmBut${nomStr}_`, () => {})

            return  bot.sendMessage(chatId, `${nomStr} страница: `, myltFilmBut[nomStr]);


        }
    }
    //-------------------------------Огоньки вывод кнопок-------------------------------
    for (nomStr = 1; nomStr <= 110; nomStr++) {


        if (data == `ogoFilmBut${nomStr}`){

            fs.appendFile(path.resolve(__dirname, `user/${chatId}/log.txt`), `ogoFilmBut${nomStr}_`, () => {})

            return  bot.sendMessage(chatId, `${nomStr} страница: `, ogoFilmBut[nomStr]);


        }
    }




    if (data == 'Home'){


        bot.sendMessage(chatId, `Выбирай или напиши мне название:`, ButtonStart);

        fs.mkdirSync(path.resolve(__dirname, `user/id/${chatId}`), {recursive: true})

        fs.writeFile(path.resolve(__dirname, `user/id/${chatId}/first_name.txt`), `${msg.from.first_name}`, () => {})

        fs.writeFile(path.resolve(__dirname, `user/id/${chatId}/last_name.txt`), `${msg.from.last_name}`, () => {})

        fs.writeFile(path.resolve(__dirname, `user/id/${chatId}/username.txt`), `${msg.from.username}`, () => {})





    }

    if (data == 'drug'){


        bot.sendMessage(chatId, `Другие функции:`, ButtonDrug);


    }



    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }

    if (data == 'randFilm'){






        let filmNomMax = Object.keys(arrContent).length;
        let rand = getRandomIntInclusive(10, 102)


        bot.sendMessage(chatId, `${arrContent[rand][4]}\n${arrContent[rand][3]}\nНомер этого фильма для поиска: 10${arrContent[rand][1]}`);
        bot.sendPhoto(chatId, `img/film/${arrContent[rand][1]}.jpg`, ButtonStart);






    }

    if (data == 'randSer'){


        let serNomMax = Object.keys(arrContent2).length;
        let rand = getRandomIntInclusive(10, 56)


        bot.sendMessage(chatId, `${arrContent2[rand][4][1]}\n${arrContent2[rand][3]}\nНомер этого сериала для поиска: 20${arrContent2[rand][1]}`, buttonArr[rand][1]);




    }




    for (nomStr = 1; nomStr <= 110; nomStr++) {


        if (data == `strFilm${nomStr}`){

            fs.appendFile(path.resolve(__dirname, `user/${chatId}/log.txt`), `strFilm${nomStr}_`, () => {})

            return  bot.sendMessage(chatId, `${nomStr} страница: `, arrStr[nomStr]);


        }
    }

    for (nomStr2 = 1; nomStr2 <= 110; nomStr2++) {

        if (data == `strSer${nomStr2}`){



            return  bot.sendMessage(chatId, `${nomStr2} страница: `, arrStrSer[nomStr2]);


        }
    }







//----------------сериалы--------------------------


    function textBut(dataFunc, textFunc, butFunc) {

        if (data == dataFunc){



            bot.sendMessage(chatId, textFunc, butFunc);


        }

    }

    nomContent = 14;
    let episodeMax;

    let serMax = Object.keys(arrContent2).length;

    episodeMax = Object.keys(arrContent2[nomContent][4]).length;

    for (episodeNom = 1; episodeNom <= serMax; episodeNom++) {

        textBut(`${nomContent}:${episodeNom}`, `${arrContent2[nomContent][4][episodeNom]}`, buttonArr[nomContent][episodeNom])
    }

    for (nomContent = 10; nomContent <= serMax; nomContent++) {



        for (episodeNom = 1; episodeNom <= episodeMax; episodeNom++) {

            textBut(`${nomContent}:${episodeNom}`, `${arrContent2[nomContent][4][episodeNom]}\n${arrContent2[nomContent][3]}\nНомер этого сериала для поиска: 20${arrContent2[nomContent][1]}`, buttonArr[nomContent][episodeNom])
        }


    }

//----------------фильмы--------------------------



    for (let pere = 10; pere <= filmKol; pere++) {

        if (data == `10${arrContent[pere][1]}`){



            bot.sendMessage(chatId, `${arrContent[pere][4]} \nНомер этого фильма для поиска: 10${arrContent[pere][1]}\n${arrContent[pere][3]}`);
            bot.sendPhoto(chatId, `img/film/${arrContent[pere][1]}.jpg`, ButtonStart);
        }

    }










})


bot.on("polling_error", console.log);


