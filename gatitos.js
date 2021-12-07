const apiKey = 'U1nx7WliKVvvfuiMA0bnRDWGGT3EQjJx';
let estado = {
    indexUsados: []
};

let contenedor = document.getElementById('gatitos-contenedor');
let img = document.getElementById('gatitos-imagen');
let btn = document.getElementById('boton-buscar');
let url;

//Chooses the search url randomly from two options, gifs or stickers
function stickerOrGif() {
    let random = Math.floor(Math.random() * 10);
    if (random > 0 && random <= 5) {
        url = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=cat`;
    }
    else if (random > 5 && random <= 10) {
        url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cat`
    }
}

//Generates a random index for selecting the gif to show
function randomGifIndex(data) {
    let i = Math.floor(Math.random() * data);
    return i;
}

//Fetches a random gif or sticker and shows it
function traerRandom () {
    stickerOrGif();
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let randomIndex = randomGifIndex(data.data.length);
            estado.indexUsados.push(randomIndex);

            img.src = data.data[randomIndex].images.downsized.url;
            contenedor.appendChild(img);

            // console.log('estado: ', estado.indexUsados);

        })
        .catch(error => {
            console.error(error);
        });
}

btn.addEventListener('click', e => {
    traerRandom();
})

traerRandom();

    
