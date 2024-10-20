import { Serie } from "./serie.js";
//======================== Datos ========================//
var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
];
//======================== Variables conectadas a HTML ========================//
var seriesTable = document.getElementById("series");
var promTable = document.getElementById("promedio");
var detalleTable = document.getElementById("detalle");
//======================== Invocar Funciones ========================//
mostrarSeries(series);
mostrarPromedioTemporadas(series);
//======================== Funciones ========================//
function mostrarSeries(series) {
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.numero, "</td>\n                               <td><a href=\"#\" id=\"link-serie-").concat(serie.numero, "\">").concat(serie.nombre, "</a></td>\n                               <td>").concat(serie.plataforma, "</td>\n                               <td>").concat(serie.temporadas, "</td>");
        seriesTable.appendChild(trElement);
        var linkElement = document.getElementById("link-serie-".concat(serie.numero));
        linkElement === null || linkElement === void 0 ? void 0 : linkElement.addEventListener("click", function () { return mostrarDatosSerie(serie); });
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
}
function mostrarPromedioTemporadas(series) {
    var trElement = document.createElement("tr");
    var promedioTemporadas = calcularPromedioTemporadas(series);
    trElement.innerHTML = "<td><b>Seasons average: </b></td><td>".concat(promedioTemporadas, "</td>");
    promTable.appendChild(trElement);
}
function calcularPromedioTemporadas(series) {
    var sumTemporadas = 0;
    for (var index = 0; index < series.length; index++) {
        var serie = series[index];
        sumTemporadas += serie.temporadas;
    }
    return sumTemporadas / series.length;
}
function mostrarDatosSerie(serie) {
    detalleTable.innerHTML = "";
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<tr><td><img src =\"".concat(serie.imagen, "\" height=\"100\"></td></tr>\n                            <tr><td>").concat(serie.nombre, "</td></tr>\n                            <tr><td>").concat(serie.info, "</td></tr>\n                            <tr><td><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.link, "</a></td></tr>");
    detalleTable.appendChild(tbodySerie);
}
