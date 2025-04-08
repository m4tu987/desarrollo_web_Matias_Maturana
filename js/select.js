import { region_comuna } from './region_comuna.js';

const redes =["Whatsapp","Tik-Tok","X","Telegram","otro"];
const temas = ["musica","deporte","ciencias","religion","politica","tecnologia","juegos","baile","comida","otro"]

function crearSelect() {

    const select = document.getElementById("select-contactar");
    select.innerHTML = "";

    redes.forEach(opcion => {
        const option = document.createElement("option");
        option.value = opcion.toLowerCase();
        option.textContent = opcion;
        select.appendChild(option);
    });

    const select2 = document.getElementById("select-temas");
    select2.innerHTML = "";
    temas.forEach(opcion => {
        const option = document.createElement("option");
        option.value = opcion.toLowerCase();
        option.textContent = opcion;
        select2.appendChild(option);
    });
} 
function llenarRegion(){
    const regionSelect = document.getElementById("select-region");
    regionSelect.innerHTML = '<option value="">Seleccione una Región</option>'; //estético
    region_comuna.regiones.forEach(region => {
        const option = document.createElement('option');
        option.value = region.numero;
        option.textContent = region.nombre;
        regionSelect.appendChild(option);
      });
}  
function llenarComuna(regionId){
    const comunaSelect = document.getElementById('select-comuna');
    comunaSelect.innerHTML = '<option value="">Seleccione una comuna</option>'; // Limpia el select de comunas
    if (regionId) {
        const region = region_comuna.regiones.find(region => region.numero === parseInt(regionId));
        if (region) {
        region.comunas.forEach(comuna => {
            const option = document.createElement('option');
            option.value = comuna.id;
            option.textContent = comuna.nombre;
            comunaSelect.appendChild(option);
        });
        }
    }
}
function mostrarInput(){
    var select = document.getElementById("select-contactar");
    var input = document.getElementById("input-otra");
    var select2 = document.getElementById("select-temas");
    var input2 = document.getElementById("input-otro-tema");
    if (select.value == "otro"){
        input.style.display = "block";
    } else {
        input.style.display = "none";
    }
    if (select2.value == "otro"){
        input2.style.display = "block";
    } else{
        input2.style.display = "none";
    }
}
function inicializarFechas() {
    const inputInicio = document.getElementById("dia-inicio");
    const inputTermino = document.getElementById("dia-termino");

    const now = new Date();

    inputInicio.value = formatearFecha(now);

    const tresHorasDespues = new Date(now.getTime() + 3 * 60 * 60 * 1000); // 3 horas mas que la inicial
    inputTermino.value = formatearFecha(tresHorasDespues);
}

function formatearFecha(date) {
    const pad = (n) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
} //formateo final de la fecha
window.onload = () => {
    crearSelect();
    llenarRegion();
    document.getElementById("select-contactar").addEventListener("change", mostrarInput);
    document.getElementById("select-temas").addEventListener("change", mostrarInput);
    document.getElementById("select-region").addEventListener("change", (event) => {
        llenarComuna(event.target.value);
    });
    inicializarFechas();
  };
