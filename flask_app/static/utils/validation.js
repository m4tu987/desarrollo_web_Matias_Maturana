window.addEventListener("load", () => {
    const submitBtn = document.getElementById("submit-btn");
    const inputFiles = document.getElementById("files");
    const modalConfirmacion = document.getElementById("modal-confirmacion");
    const formulario = document.getElementById("myForm");

    submitBtn.addEventListener("click", () => {
        const archivos = inputFiles.files;
        const inputs_adicionales = document.querySelectorAll('#contenedorFotos input[type="file"]');
        let archivos_adicionales = [];
        inputs_adicionales.forEach(input => {
            for (let i = 0; i < input.files.length; i++) {
                archivos_adicionales.push(input.files[i]);
            }
        });
        const totalArchivos = archivos.length + archivos_adicionales.length;
        if (totalArchivos === 0) {
            alert("Debes seleccionar al menos una foto.");
            return;
        }

        if (totalArchivos > 5) {
            alert("Solo puedes subir un máximo de 5 fotos.");
            return;
        }
        if (!validarformulario()){
            return;
        }
        mostrarConfirmacion();
        
    });
function validarformulario(){
    const selectRegion = document.getElementById("select-region");
    const selectComuna = document.getElementById("select-comuna");
    const inputSector = document.getElementById("sector");
    const inputNombre = document.getElementById("nombre");
    const inputEmail = document.getElementById("email");
    const inputPhone = document.getElementById("phone");
    const selectContactar = document.getElementById("select-contactar");
    const inputInicio = document.getElementById("dia-inicio");
    const inputTermino = document.getElementById("dia-termino");
    const selectTema = document.getElementById("select-temas");

    if (selectRegion.value === "") {
        alert("Por favor, seleccione una región.");
        return;  // Evita el envío del formulario si la validación falla
    }
    if (selectComuna.value === ""){
        alert("Por favor, seleccione una Comuna.");
        return;  // Evita el envío del formulario si la validación falla
    }
    if(inputSector.value.length > 100){
        alert("El texto excede el límite de 100 caracteres.");
        return;
    }
    if (!inputNombre.value || inputNombre.value > 200){
        alert("Error al ingresar el nombre");
        return;
    }
    let re = /^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!inputEmail.value || !re.test(inputEmail.value)){
        alert("Ingrese un correo válido");
        return;
    }
    const tel = inputPhone.value;
    if(!/^\+569\.\d{8}$/.test(tel)){
        alert("Ingrese Número de teléfono válido");
        return;
    }
    if(selectContactar.value === "otro"){
        inputContactar =  document.getElementById("input-otra");
        if (inputContactar.value.length < 4 || inputContactar.value.length > 50){
            alert("Ingresa ID o URL Válido");
            return;
        }
    }
    const time = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
    if(!time.test(inputInicio.value) || !inputInicio.value){
        alert("Ingresa Fecha de inicio Válida");
        return;
    }
    if (inputTermino.value){
        if(new Date(inputTermino.value) <= new Date(inputInicio.value)){
            alert("Ingresa Fecha de Término Válida");
            return;
        }
    }
    if(!selectTema.value){
        alert("Seleccione una opcion");
        return;
    }
    if (selectTema.value ==="otro"){
        const inputTema= document.getElementById("input-otro-tema");
        if (inputTema.value.length < 3 || inputTema.value.length > 15 || inputTema.value.trim() ===""){
            alert("Ingrese tema válido");
            return;
        }
    }
    return true;
    }
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
    const archivos_largo = document.getElementById("files").files.length
    const inputs = contenedor.getElementsByTagName('input');
    if (inputs.length + archivos_largo > 5) {
        alert('No puedes agregar más de 5 fotos.');
        return;
    }

    // Crear el nuevo input de tipo "file"
    const nuevoInput = document.createElement('input');
    nuevoInput.type = 'file';
    nuevoInput.name = 'files';  // 
    nuevoInput.accept = 'image/*,.pdf';  // Aceptar imágenes y PDFs
    contenedor.appendChild(nuevoInput);  // Añadir el nuevo input al contenedor
    contenedor.appendChild(document.createElement('br'));  // Añadir un salto de línea después de cada input
}

document.getElementById('agregarFotoBtn').addEventListener('click', agregarFoto);
