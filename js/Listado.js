const actividades = [
    {
      inicio: '2025-03-29 15:00',
      termino: '2025-03-29 17:00',
      comuna: 'Ñuñoa',
      sector: 'Av. Irarrázaval',
      tema: 'Música',
      organizador: 'Pedro López',
      fotos: ['imagenes/man-guitar.jpg', 'imagenes/man-guitar2.jpg']
    },
    {
      inicio: '2021-02-03 22:00',
      termino: '2021-02-04 01:00',
      comuna: 'Santiago',
      sector: 'Centro',
      tema: 'Juegos',
      organizador: 'Carlos Ramírez',
      fotos: ['imagenes/juegos-ninos.jpg']
    },
    {
      inicio: '2025-04-05 07:00',
      termino: '2025-04-05 10:00',
      comuna: 'Valparaíso',
      sector: 'Cerro Alegre',
      tema: 'Tecnología',
      organizador: 'Felipe Altamirano',
      fotos: ['imagenes/hombre-cerro.jpg', 'imagenes/hombre-cerro2.jpg', 'imagenes/hombre-cerro3.jpg']
    },
    {
      inicio: '2021-01-07 8:00',
      termino: '2021-01-08 9:00',
      comuna: 'Talcahuano',
      sector: 'Las Salinas',
      tema: 'Deporte',
      organizador: 'Amapola Fernández',
      fotos: ['imagenes/mujer-hacer-deporte-aire.jpg']
    },
    {
      inicio: '2023-04-09 10:00',
      termino: '2023-04-09 12:00',
      comuna: 'Valdivia',
      sector: 'La Costanera',
      tema: 'Baile',
      organizador: 'Paula González',
      fotos: ['imagenes/gente-sonriente.jpg']
    }
  ];


const tbody = document.getElementById("tablaBody");
const listado = document.getElementById("listadoActividades");
const detalle = document.getElementById("detalleActividad");

    // Llenar tabla
function llenarActividades(){
    actividades.forEach((actividad, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${actividad.inicio}</td>
            <td>${actividad.termino}</td>
            <td>${actividad.comuna}</td>
            <td>${actividad.sector}</td>
            <td>${actividad.tema}</td>
            <td>${actividad.organizador}</td>
            <td>${actividad.fotos.length}</td>
        `;
        row.addEventListener("click", () => mostrarDetalle(index));
        tbody.appendChild(row);
        });
}


function mostrarDetalle(index) {
    const act = actividades[index];
    listado.style.display = "none";
    detalle.style.display = "block";

    document.getElementById("inicio").textContent = act.inicio;
    document.getElementById("termino").textContent = act.termino;
    document.getElementById("comuna").textContent = act.comuna;
    document.getElementById("sector").textContent = act.sector;
    document.getElementById("tema").textContent = act.tema;
    document.getElementById("organizador").textContent = act.organizador;
    document.getElementById("totalFotos").textContent = act.fotos.length;
    const fotosDiv = document.getElementById("fotos");
    fotosDiv.innerHTML = "";
    act.fotos.forEach(fotoUrl => {
      const img = document.createElement("img");
      img.src = fotoUrl;
      img.classList.add("foto");
      img.addEventListener("click", () => ampliarFoto(fotoUrl));
      fotosDiv.appendChild(img);
    });
}


function ampliarFoto(url) {
    const modal = document.getElementById("modalFoto");
    const img = modal.querySelector("img");
    img.src = url.replace("320x240", "800x600"); // Simula cambio de tamaño
    modal.style.display = "flex";
}


window.onload = () => {
    llenarActividades();
  };
