document.addEventListener('DOMContentLoaded', postData);

const data = document.location.search;
const params = new URLSearchParams(data);

const question = params.get('question');

let characters;
let image;

if (question == "movie"){
    characters = '10 Things I Hate About You';
    image='movie.jpg';
} else if (question == "icecream"){
    characters = 'mango';
    image='icecream.jpg';
} else {
    characters = 'light pink';
    image='lightpink.jpg';
}

function postData() {
    const container = document.getElementById('results');
    container.innerHTML = `<h1>${characters}!</h1>
                            <img src="${image}"></img>`;
}