const quoteButton = document.querySelector('.generate').addEventListener('click', getQuote);

const factTxt = document.querySelector('.generate');

const endpoint = 'https://catfact.ninja/fact';

let fact = '';

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);
        displayQuote(json['fact']);
        
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function fetchCatImage(){
    let image = document.getElementById("cat-image");
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json())
    .then(json => image.src = json[0].url);
}
function btnClick(){
    let button = document.getElementById("new-cat-btn");
    button.addEventListener("click", fetchCatImage);
}

document.addEventListener("DOMContentLoaded",() => {
    fetchCatImage();
    btnClick();
})

// this function shows the question
function displayQuote(fact) {
    factTxt.textContent = fact;
}

fetchCatImage();
