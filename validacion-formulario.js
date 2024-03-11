document.addEventListener('DOMContentLoaded', function() {
   

    // Función para verificar si una cadena contiene solo letras
    function soloLetras(cadena) {
        return /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(cadena);
    }

    // Función para obtener la capacidad de la sala seleccionada
    function obtenerCapacidadSala(salaSeleccionada) {
        switch (salaSeleccionada) {
            case "1": // Pilates
                return 6; // Capacidad de la sala de Pilates
            case "2": // TRX
                return 5; // Capacidad de la sala de TRX
            case "3": // Yoga
                return 20; // Capacidad de la sala de Yoga
            default:
                return 0;
        }
    }

    // Generar tramos horarios según el día seleccionado
    function generarTramosHorarios() {
        let selectHoraInicio = document.getElementById('horaInicio');
        let fechaSeleccionada = new Date(document.forms["formulario"]["fecha"].value);
        let diaSeleccionado = fechaSeleccionada.getDay();
        selectHoraInicio.innerHTML = ''; // Limpiar opciones existentes

        let horaInicio = 9;
        let horaFin = 21;

        // Si es sábado o domingo, establecer las horas disponibles solo por la mañana hasta la 1 PM
        if (diaSeleccionado === 6 || diaSeleccionado === 0) { // Sábado o domingo
            horaFin = 13; // Cambiamos la hora de cierre a la 1 PM
        }

        for (let i = horaInicio; i <= horaFin; i++) {
            let hora = i < 10 ? '0' + i : '' + i;
            let option = document.createElement('option');
            option.value = hora + ':00';
            option.text = hora + ':00';
            selectHoraInicio.appendChild(option);
        }
    }

    // Llamar a la función para generar tramos horarios cuando cambia la fecha
    document.forms["formulario"]["fecha"].addEventListener("change", function() {
        generarTramosHorarios();
    });

    // Función para mostrar mensaje de error y cambiar el estilo del campo
    function mostrarMensajeError(mensaje, campo) {
        // Verificar si ya existe un mensaje de error para el campo
        if (!document.getElementById("error-" + campo)) {
            let errorElement = document.createElement("span");
            errorElement.textContent = mensaje;
            errorElement.style.color = "red";
            errorElement.id = "error-" + campo;

            let inputElement = document.querySelector('[name="' + campo + '"]');
            inputElement.parentNode.appendChild(errorElement);
            
            // Agregar una clase al campo para resaltarlo visualmente
            inputElement.classList.add("error-input");
        }
    }

    // Función para ocultar mensaje de error y restaurar el estilo del campo
    function ocultarMensajeError(campo) {
        let errorElement = document.getElementById("error-" + campo);
        if (errorElement) {
            errorElement.remove();
            // Remover la clase de error del campo
            let inputElement = document.querySelector('[name="' + campo + '"]');
            inputElement.classList.remove("error-input");
        }
    }

    // Función para validar el formulario
    function validarFormulario() {
        let nombre = document.forms["formulario"]["nombre"].value;
        let apellidos = document.forms["formulario"]["apellidos"].value;
        let numeroPersonas = document.forms["formulario"]["numero-personas"].value;
        let salaSeleccionada = document.getElementById("SALAS").value;
        let fechaReserva = document.forms["formulario"]["fecha"].value;
        let horaInicio = document.forms["formulario"]["horaInicio"].value;

        // Verificar que todos los campos estén completos
        if (nombre == "" || apellidos == "" || numeroPersonas == "" || salaSeleccionada == "0" || fechaReserva == "" || horaInicio == "") {
            alert("Por favor, complete todos los campos del formulario.");
            return false;
        }

        // Verificar si el nombre contiene solo caracteres alfabéticos
        if (!soloLetras(nombre)) {
            mostrarMensajeError("El nombre solo puede contener letras.", "nombre");
            return false;
        } else {
            ocultarMensajeError("nombre"); // Ocultar el mensaje de error si la validación pasa
        }

        // Verificar si los apellidos contienen solo caracteres alfabéticos
        if (!soloLetras(apellidos)) {
            mostrarMensajeError("Los apellidos solo pueden contener letras.", "apellidos");
            return false;
        } else {
            ocultarMensajeError("apellidos"); // Ocultar el mensaje de error si la validación pasa
        }

        // Verificar si el número de personas es válido y si supera la capacidad de la sala
        if(parseInt(numeroPersonas) <= 0){
            mostrarMensajeError("Número de personas no válido.", "numero-personas");
            return false;
        }
        else if (parseInt(numeroPersonas) > obtenerCapacidadSala(salaSeleccionada)) {
            mostrarMensajeError("Se supera la capacidad de la sala seleccionada.", "numero-personas");
            return false;
        } else {
            ocultarMensajeError("numero-personas"); // Ocultar el mensaje de error si la validación pasa
        }

        // Verificar si la fecha de reserva es válida (no puede ser anterior a la fecha actual)
        let fechaActual = new Date();
        let fechaSeleccionada = new Date(fechaReserva);
        if (fechaSeleccionada.getFullYear() === fechaActual.getFullYear() &&
            fechaSeleccionada.getMonth() === fechaActual.getMonth() &&
            fechaSeleccionada.getDate() === fechaActual.getDate()) {
            ocultarMensajeError("fecha"); // Ocultar el mensaje de error si la validación pasa
        } else if (fechaSeleccionada > fechaActual) {
            ocultarMensajeError("fecha"); // Ocultar el mensaje de error si la validación pasa
        } else {
            mostrarMensajeError("La fecha de reserva no puede ser anterior a la fecha actual.", "fecha");
            return false;
        }
        // Si todo está correcto, se envía el formulario
        alert("¡Formulario enviado con éxito!");
        return true;
    }

    // Evento para enviar el formulario al hacer clic en el botón de reserva
    document.getElementById("btnReservaFormulario").addEventListener("click", function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario automáticamente
        if (!validarFormulario()) { // Validar el formulario
            // En caso de error, no hacer nada adicional aquí
        }
    });
    
});