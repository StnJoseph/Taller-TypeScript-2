import { Serie } from "./serie.js";
import { dataSeries } from "./dataSeries.js";

//======================== Variables conectadas a HTML ========================//
let seriesTable: HTMLElement = document.getElementById("series")!;
let promTable: HTMLElement = document.getElementById("promedio")!;
let detalleTable: HTMLElement = document.getElementById("detalle")!;

//======================== Invocar Funciones ========================//
mostrarSeries(dataSeries);
mostrarPromedioTemporadas(dataSeries);

//======================== Funciones ========================//



function mostrarSeries(series: Serie[]): void {

    for (let serie of series) {
        let trElement: HTMLElement = document.createElement("tr");
        
        trElement.innerHTML = `<td>${serie.numero}</td>
                               <td><a href="#" id="link-serie-${serie.numero}">${serie.nombre}</a></td>
                               <td>${serie.plataforma}</td>
                               <td>${serie.temporadas}</td>`;
        
        seriesTable.appendChild(trElement);

        let linkElement = document.getElementById(`link-serie-${serie.numero}`);
        linkElement?.addEventListener("click", () => mostrarDatosSerie(serie)); 
    }
}


function mostrarPromedioTemporadas(series: Serie[]): void{
    let trElement: HTMLElement = document.createElement("tr");
    let promedioTemporadas: number = calcularPromedioTemporadas(series);
    trElement.innerHTML = `<td><b>Seasons average: </b></td><td>${promedioTemporadas}</td>`;
    promTable.appendChild(trElement);
}

function calcularPromedioTemporadas(series: Serie[]): number{
    let sumTemporadas = 0;
    
    for (let index = 0; index < series.length; index++)
    {
        let serie: Serie = series[index];
        sumTemporadas += serie.temporadas
    }
    return sumTemporadas/series.length
}

function mostrarDatosSerie(serie: Serie): void{
    detalleTable.innerHTML = "";

    let tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = `<tr><td><img src ="${serie.imagen}" height="100"></td></tr>
                            <tr><td>${serie.nombre}</td></tr>
                            <tr><td>${serie.info}</td></tr>
                            <tr><td><a href="${serie.link}" target="_blank">${serie.link}</a></td></tr>`;
    detalleTable.appendChild(tbodySerie);
}