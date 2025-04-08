window.addEventListener("load", () => {
    const submitBtn = document.getElementById("submit-btn");
    const inputFiles = document.getElementById("files");
    const modalConfirmacion = document.getElementById("modal-confirmacion");
    const formulario = document.getElementById("myForm");

    // Verificar que el formulario y el mensajeFinal se están seleccionando correctamente
    console.log(formulario); // Verifica si el formulario se encuentra

    submitBtn.addEventListener("click", () => {
        const archivos = inputFiles.files;

        if (archivos.length === 0) {
            alert("Debes seleccionar al menos una foto.");
            return;
        }

        if (archivos.length > 5) {
            alert("Solo puedes subir un máximo de 5 fotos.");
            return;
        }

        mostrarConfirmacion();
    });
    function mostrarConfirmacion() {
        // Muestra el modal
        modalConfirmacion.style.display = "flex";

        const btnSi = document.getElementById("btn-si");
        const btnNo = document.getElementById("btn-no");

        if (btnSi && btnNo) {
            btnSi.addEventListener("click", () => {
                modalConfirmacion.innerHTML = `
                    <div class="modal-content">
                        <p>Hemos recibido su información, muchas gracias y suerte en su actividad.</p>
                        <button onclick="window.location.href='index.html'">Volver a la portada</button>
                    </div>
                `;
            });

            btnNo.addEventListener("click", () => {
                modalConfirmacion.style.display = "none";
                formulario.style.display = "block";
            });
        }
    }
});
function agregarFoto() {
    const contenedor = document.getElementById('contenedorFotos');  // Contenedor donde se agregarán los inputs
    const inputs = contenedor.getElementsByTagName('input');
    if (inputs.length >= 4) {
        alert('No puedes agregar más de 5 fotos.');
        return;
    }

    // Crear el nuevo input de tipo "file"
    const nuevoInput = document.createElement('input');
    nuevoInput.type = 'file';
    nuevoInput.name = 'files';  // Asegúrate de que todos los inputs tengan el mismo nombre para enviarlos como un grupo de archivos
    nuevoInput.accept = 'image/*,.pdf';  // Aceptar imágenes y PDFs
    contenedor.appendChild(nuevoInput);  // Añadir el nuevo input al contenedor
    contenedor.appendChild(document.createElement('br'));  // Añadir un salto de línea después de cada input
}

// Asignar el evento al botón de agregar otra foto
document.getElementById('agregarFotoBtn').addEventListener('click', agregarFoto);