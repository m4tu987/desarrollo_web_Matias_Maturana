const actividades = [
    {
      inicio: '2025-03-29 15:00',
      termino: '2025-03-29 17:00',
      comuna: 'Ñuñoa',
      sector: 'Av. Irarrázaval',
      tema: 'Música',
      fotos: ['imagenes/man-guitar.jpg']
    },
    {
      inicio: '2021-02-03 22:00',
      termino: '2021-02-04 01:00',
      comuna: 'Santiago',
      sector: 'Centro',
      tema: 'Juegos',
      fotos: ['imagenes/juegos-ninos.jpg']
    },
    {
      inicio: '2025-04-05 07:00',
      termino: '2025-04-05 10:00',
      comuna: 'Valparaíso',
      sector: 'Cerro Alegre',
      tema: 'Tecnología',
      fotos: ['imagenes/hombre-cerro.jpg']
    },
    {
      inicio: '2021-01-07 8:00',
      termino: '2021-01-08 9:00',
      comuna: 'Talcahuano',
      sector: 'Las Salinas',
      tema: 'Deporte',
      fotos: ['imagenes/mujer-hacer-deporte-aire.jpg']
    },
    {
      inicio: '2023-04-09 10:00',
      termino: '2023-04-09 12:00',
      comuna: 'Valdivia',
      sector: 'La Costanera',
      tema: 'Baile',
      fotos: ['imagenes/gente-sonriente.jpg']
    }
  ];

const tbody = document.getElementById("tablab");

function llenarActividades(){
    actividades.forEach((actividad, index) => {
        const row = document.createElement("tr");
        const fotosHTML = actividad.fotos
        .map(url => `<img src="${url}" class="foto2" alt="foto ${index}">`)
        .join("");
        row.innerHTML = `
            <td>${actividad.inicio}</td>
            <td>${actividad.termino}</td>
            <td>${actividad.comuna}</td>
            <td>${actividad.sector}</td>
            <td>${actividad.tema}</td>
            <td>${fotosHTML}</td>
        `;
        tbody.appendChild(row);
        });
}
window.onload = () => {
    llenarActividades();
  };
