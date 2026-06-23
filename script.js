let arvores = 0;

function plantarArvore(){

    arvores++;

    document.getElementById("contador").innerHTML = arvores;

    document.getElementById("resultado").innerHTML =
    "🌳 Excelente! Você contribuiu para um futuro mais sustentável.";
}

function mostrarMensagem(){

    alert(
        "O agro sustentável utiliza tecnologia e preservação ambiental para garantir alimento e qualidade de vida para as próximas gerações."
    );

}

function mostrarCuriosidade(){

    const curiosidades = [

        "🌾 O Brasil está entre os maiores produtores de alimentos do mundo.",

        "💧 Sistemas inteligentes podem economizar até 50% de água na irrigação.",

        "🌱 O plantio sustentável ajuda a preservar o solo.",

        "🚜 Drones são usados para monitorar lavouras modernas.",

        "♻️ A agricultura sustentável reduz impactos ambientais."
    ];

    const sorteio =
    Math.floor(Math.random() * curiosidades.length);

    document.getElementById("resultado").innerHTML =
    curiosidades[sorteio];
}