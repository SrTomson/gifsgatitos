const apiKey = 'U1nx7WliKVvvfuiMA0bnRDWGGT3EQjJx';
let contenedor = document.getElementById('gatitos-contenedor');
let img = document.getElementById('gatitos-imagen');
let btn = document.getElementById('boton-buscar');
let url;

function stickerOrGif(){
    let random = Math.floor(Math.random() * 10);
    console.log(random);
    // Math.floor(random)
    if(random > 00 && random <= 5){
        url = `http://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=cat&limit=50`;
    }
    else if(random > 5 && random <= 10){
        url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cat&limit=50`
    }
}

let traerRandom = function() {
    stickerOrGif();
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let randomGifIndex = Math.floor(Math.random() * data.data.length)
            img.src = data.data[randomGifIndex].images.downsized.url;
            contenedor.appendChild(img);
        })
        .catch(error => {
            console.error(error);
        });
}

btn.addEventListener('click', e => {
    traerRandom();
})

traerRandom();