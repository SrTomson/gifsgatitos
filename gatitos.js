const apiKey = 'U1nx7WliKVvvfuiMA0bnRDWGGT3EQjJx';
let estado = {
    indexUsados: []
};

let contenedor = document.getElementById('gatitos-contenedor');
let img = document.getElementById('gatitos-imagen');
let btn = document.getElementById('boton-buscar');
let url;

function stickerOrGif() {
    let random = Math.floor(Math.random() * 10);
    if (random > 00 && random <= 5) {
        url = `http://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=cat&limit=50`;
    }
    else if (random > 5 && random <= 10) {
        url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cat&limit=50`
    }
}

function randomGifIndex(data) {
    let i = Math.floor(Math.random() * data);
    return i;
}

function indexForLoop(data) {
    for (let i = 0; i < estado.indexUsados.length; i++) {
        // if (i != estado.indexUsados[i]) {
        //     img.src = data;
        //     contenedor.appendChild(img);
        // }
        // else{
        //     console.log('repetido ', estado.indexUsados[i])
        //     traerRandom();
        //     break;
        // }

        // if(estado[i] != estado.indexUsados[i]){
        //     img.src = data;
        //     contenedor.appendChild(img);
        // }
        // else{
        //     console.log('repetido' + estado.indexUsados[i])
        //     // traerRandom();
        //     break;
        // }
    }
}

let traerRandom = function () {
    stickerOrGif();
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let randomIndex = randomGifIndex(data.data.length);
            estado.indexUsados.push(data.data[randomIndex].id);

            img.src = data.data[randomIndex].images.downsized.url;
            contenedor.appendChild(img);
            // for(let i = 0; i < estado.indexUsados.length; i++){
            //     if(estado.indexUsados[i] != data.data[randomIndex].id){
            //         img.src = data.data[i].images.downsized.url;
            //         contenedor.appendChild(img);
            //     }
            //     else if(estado.indexUsados[i] == data.data[randomIndex].id){
            //         console.log('repetido: ', estado.indexUsados[i])
            //     }
            // }

        })
        .catch(error => {
            console.error(error);
        });
}

btn.addEventListener('click', e => {
    traerRandom();
})

traerRandom();

