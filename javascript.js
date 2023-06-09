const genres =
[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}];

const arr = new Map();
for(let i=0;i<genres.length;i++) {
    arr.set(genres[i]["id"],genres[i]["name"]);
}

//console.log(arr.get(28));

const apikey = 'api_key=18e114f84b3c5dbbff36061d911f284c' ;
const baseurl='https://api.themoviedb.org/3' ;
const apiurl= baseurl+'/discover/movie?sort_by=popularity.desc&'+apikey ;
const imgurl='https://image.tmdb.org/t/p/w500' ;
const main = document.getElementById('main') ;
const tagsie = document.getElementById('tag') ;
getMovies(apiurl);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showmovies(data.results);
})
}


function getgenre(para){
    //console.log(para[0]);
    tagsie.innerHTML='';
        console.log(arr.get(para[0]));
        //tagsie.innerText=arr.get(para[0]);
        const a=arr.get(para[0]);
        return a;
    
}


function showmovies(data){
    
    main.innerHTML='';

    /*for(let k=0;k<6;k++) {
        const {original_title, backdrop_path, vote_average, overview, genre_ids} = movieitem;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movieitem');
        movieEl.innerHTML=`
        <img src="${imgurl+backdrop_path}" alt="${original_title}">
        <div class="movie-text">
          <div class="myDIV" class="movie-text"><h2> ${original_title}</h2><p id="tag">${getgenre(genre_ids)}</p></div>
            <div class="hide"><a href="">Watch now</a></div>
        </div>
        `
        main.appendChild(movieEl);
    }*/




    data.forEach(movieitem => {
        const {original_title, backdrop_path, vote_average, overview, genre_ids} = movieitem;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movieitem');
        movieEl.innerHTML=`
        <img src="${imgurl+backdrop_path}" alt="${original_title}">
        <div class="movie-text">
          <div class="myDIV" class="movie-text"><p id="tag">${getgenre(genre_ids)}</p><h2>${original_title}</h2></div>
            <div class="hide"><a href="">Watch now</a></div>
        </div>
        `
        main.appendChild(movieEl);
    })

}





