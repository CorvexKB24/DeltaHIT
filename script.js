$(document).ready(function () {
    // VARIABLES Y AUDIOS
    puntos = 0;
    var sumar = new Audio("snd/maspuntos.mp3");
    var restar = new Audio("snd/menospuntos.mp3");
    var gaster = new Audio("snd/gaster.mp3");
    var actualizar = new Audio("snd/actualizar.mp3");
    gaster.volume = 0.20;
    restar.volume = 0.15;
    sumar.volume = 0.25;

    setTimeout(function () {
        sumarPuntos(500);
    }, 1000)

    // EFECTO BOTONES
    $("input[type='button']").hover(
        function () {
            $(this).css("background-color", "#ffff00");
            $(this).css("color", "black");
        },
        function () {
            $(this).css("background-color", "black");
            $(this).css("color", "white");
        }
    );

    // INFORMACIÓN DE LOS BOTONES
    const botones = [
        { id: "#crearPato", puntos: 50, tipo: "sumar" },
        { id: "#atraparStarwalker", puntos: 10, tipo: "sumar" },
        { id: "#derrotarJevil", puntos: 100, tipo: "sumar" },
        { id: "#jevilNOHIT", puntos: 200, tipo: "sumar" },
        { id: "#kroundNOHIT", puntos: 50, tipo: "sumar" },
        { id: "#derrotarSpamton", puntos: 50, tipo: "sumar" },
        { id: "#derrotarSpamtonNEO", puntos: 100, tipo: "sumar" },
        { id: "#spamtonNEOnohit", puntos: 200, tipo: "sumar" },
        { id: "#queenArcadeNOHIT", puntos: 15, tipo: "sumar" },
        { id: "#berdlyNOHIT", puntos: 50, tipo: "sumar" },
        { id: "#sweetCapKkNOHIT", puntos: 50, tipo: "sumar" },
        { id: "#recogerBanana", puntos: 10, tipo: "sumar" },
        { id: "#esquivarCoches", puntos: 100, tipo: "sumar" },
        { id: "#gigaQueenNOHIT", puntos: 100, tipo: "sumar" },
        { id: "#preguntasTaskManager", puntos: 30, tipo: "sumar" },
        { id: "#noRomperJarrones", puntos: 10, tipo: "sumar" },
        { id: "#rangoS", puntos: 30, tipo: "sumar" },
        { id: "#rangoT", puntos: 50, tipo: "sumar" },
        { id: "#laninoElninaNOHIT", puntos: 50, tipo: "sumar" },
        { id: "#mantoSombrio", puntos: 70, tipo: "sumar" },
        { id: "#susieCarrera", puntos: 10, tipo: "sumar" },
        { id: "#derrotarCaballero", puntos: 200, tipo: "sumar" },
        { id: "#cabelleroNOHIT", puntos: 350, tipo: "sumar" },
        { id: "#derrotarGerson", puntos: 100, tipo: "sumar" },
        { id: "#gersonNOHIT", puntos: 200, tipo: "sumar" },
        { id: "#jackensteinNOHIT", puntos: 80, tipo: "sumar" },
        { id: "#msMizzle", puntos: 60, tipo: "sumar" },
        { id: "#tobyFox", puntos: 33, tipo: "sumar" },
        { id: "#alcanzarCaballero", puntos: 50, tipo: "sumar" },
        { id: "#alcanzarNOHIT", puntos: 100, tipo: "sumar" },
        { id: "#ptMaximos", puntos: 80, tipo: "sumar" },
        { id: "#sinArmadura", puntos: 100, tipo: "sumar" },
        { id: "#conseguirHuevo", puntos: 6, tipo: "sumar" },
        { id: "#reclutarStarwalker", puntos: 10, tipo: "sumar" },
        { id: "#comerMusgo", puntos: 10, tipo: "sumar" },
        { id: "#golpeRecibido", puntos: 20, tipo: "restar" },
        { id: "#usarObjetos", puntos: 50, tipo: "restar" },
        { id: "#morir", puntos: 100, tipo: "restar" },
        { id: "#reyNOHIT", puntos: 100, tipo: "sumar" },
        { id: "#queenNOHIT", puntos: 50, tipo: "sumar" },
        { id: "#tennaNOHIT", puntos: 150, tipo: "sumar" },
        { id: "#titanNOHIT", puntos: 150, tipo: "sumar" },
        { id: "#noHIToverworld", puntos: 15, tipo: "sumar" },
        { id: "#roulxNOHIT", puntos: 150, tipo: "sumar" },
        { id: "#pianoMegalo", puntos: 10, tipo: "sumar" },
        { id: "#estatuaGerson", puntos: 60, tipo: "sumar" },
        { id: "#escaladaNOHIT", puntos: 30, tipo: "sumar" }
        // { id: "#jackensteinVELOZ", puntos: 50, tipo: "sumar" }
    ];

    // ACCIÓN DE LOS BOTONES
    botones.forEach(boton => {
        $(boton.id).click(() => {
            if (boton.tipo === "sumar") {
                sumarPuntos(boton.puntos);
            } else {
                restarPuntos(boton.puntos);
            }
        });
    });

    // ACTUALIZAR PUNTOS
    $("#actualizar").click(function () {
        actualizarPuntos($("#inputPuntos").val())
    });

    // FUNCIONES DEL PROGRAMA
    function sumarPuntos(ganados) {
        puntos += ganados;
        sumar.play();
        $("#cambiosPuntos")
            .text(`+${ganados}`)
            .removeClass("escondido resta suma")
            .addClass("suma")
            .fadeIn(400)
            .delay(800)
            .fadeOut(400);
        $("#puntos").text(puntos);
    }

    function restarPuntos(perdidos) {
        puntos -= perdidos;
        restar.play();
        $("#cambiosPuntos")
            .text(`-${perdidos}`)
            .removeClass("escondido resta suma")
            .addClass("resta")
            .fadeIn(800)
            .delay(800)
            .fadeOut(400);
        $("#puntos").text(puntos);
    }

    function actualizarPuntos(total) {
        // If para validar que sea un número válido
        if (!isNaN(total)) {
            puntos = Number(total);
            $("#puntos").text(puntos);
            actualizar.play();

            if (total == 1225 || total == "1225") {
                alert("...");
                window.open("https://deltarune.com/dess/", "_blank");
            }
        } else if (total == "GASTER" || total == "gaster") {
            var random = randomBetween(1, 2);
            if (random == 1) {
                gaster.play();
            } else {
                window.open("https://www.youtube.com/shorts/WHzlh5U_Cxo", "_blank");
            }
        } else if (total.toUpperCase() == "DELTAESP") {
            window.open("https://deltaesp.site", "_blank");
        } else {
            alert("Introduce un número válido.");
        }
    }
});





