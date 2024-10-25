import { dataSeries } from "./dataSeries.js";
//======================== Variables conectadas a HTML ========================//
var seriesTable = document.getElementById("series");
var promTable = document.getElementById("promedio");
var detalleTable = document.getElementById("detalle");
//======================== Invocar Funciones ========================//
mostrarSeries(dataSeries);
mostrarPromedioTemporadas(dataSeries);
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
