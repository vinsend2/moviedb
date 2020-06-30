/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';




const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



let adv= document.querySelectorAll(`.promo__adv img`),
    genre= document.querySelector(`.promo__genre`),
    promo= document.querySelector(`.promo__bg`),
    list= document.querySelector(`.promo__interactive-list`),
    input= document.querySelector(`.adding__input`),
    add= document.querySelector(`.add`),   
    item= document.querySelectorAll(`.promo__interactive-item`),
    // deletebtn= document.querySelectorAll(`.delete`),
    checkbox= document.querySelector(`.add input[type=checkbox]`);
    
    



add.addEventListener(`submit`, (event) => {
    event.preventDefault();
    let newFilm = input.value;  
    const favorit = checkbox.checked;
    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
        }
        movieDB.movies.push(newFilm);  
        sortArr(movieDB.movies);    
        createMovieList(movieDB.movies, list);
        event.target.reset();
        console.log(movieDB.movies);
    }   
});

// deletebtn.forEach((btn, i) => {
//     btn.addEventListener(`.click`, () => {
//         console.log(`сюда`);
//         btn.parentElement.remove();   
//         createMovieList(movieDB.movies, list);
//         movieDB.movies.splice(i, 1); 
//         createMovieList(movieDB.movies, list);
//     });
// }); 
 
// btn.addEventListener(`submit`, function() {
//     event.preventDefault();
//     if (typeof (newfilm) === 'string' && typeof (newfilm) != null && newfilm != "" &&  newfilm.length < 50) {
//     movieDB.movies.push(newfilm); 
//     } 
// var uniset = new Set(movieDB.movies);
// var back = [...uniset];
// movieDB.movies= back;
//     movieDB.movies.sort();
//     list.innerHTML = '';
//     if (checkbox.checked) {
//         console.log(`Добавляем любимый фильм`);
//     }    
//     movieDB.movies.forEach((film, i) => {
//         if (film.length > 21) {
//             list.innerHTML += `
//             <li class="promo__interactive-item">${1+i} ${film.slice(0,21) + `...`}
//             <div class="delete"></div>
//             </li>
//              `
//         } else {
//         list.innerHTML += `
//         <li class="promo__interactive-item">${1+i} ${film}
//         <div class="delete"></div>
//         </li>
//          `; 
//         }
//     });
//     btn.reset();
// });

// list.addEventListener(`click`, function(event) {
//     if (event.target.className != 'delete') return;

//       let pane = event.target.closest('.promo__interactive-item');
//       pane.remove();
// });


// input.addEventListener(`input`, function () {
//          newfilm = input.value;            
// });

list.innerHTML = '';

const deleteAdv= () => {
    adv.forEach(arr => {
        arr.remove();
    });
};

const sortArr= (arr) => {
    arr.sort();
}

const makeChange= () => {
    genre.textContent = `Драма`;
    promo.style.backgroundImage = `url("img/bg.jpg")`;
};

function createMovieList (films, parent) {
    parent.innerHTML= ``;
    films.forEach((film, i) => {        
        parent.innerHTML += `
        <li class="promo__interactive-item">${1+i} ${film}
        <div class="delete"></div>
        </li>
         `;
    });

    document.querySelectorAll(`.delete`).forEach((btn, i) => {
        btn.addEventListener(`click`, () => {
            console.log(`удалаю`+btn);
            btn.parentElement.remove();   
            movieDB.movies.splice(i, 1); 
            createMovieList(movieDB.movies, list);
        });
    });
}

sortArr(movieDB.movies);
createMovieList(movieDB.movies, list);
deleteAdv(adv);
makeChange();


