document.addEventListener('DOMContentLoaded', function() {
    let selectHoraInicio = document.getElementById('horaInicio');

    // Genera las opciones desde las 9 de la mañana hasta las 9 de la noche
    for (let i = 9; i <= 21; i++) {
        let hora = i < 10 ? '0' + i : '' + i;
        let option = document.createElement('option');
        option.value = hora + ':00';
        option.text = hora + ':00';
        selectHoraInicio.add(option);
    }


    // Obtener el valor seleccionado de la sala
    let salaSeleccionada = document.getElementById('SALAS').value;
    alert('salaSeleccionada');
    
    // Obtener el número de personas ingresado
    let numeroPersonas = parseInt(salaSeleccionada);
    alert('numeroPersonas');
    
    /*
    // Definir los límites de personas según la sala seleccionada
    let limitePersonas;
    
    switch (salaSeleccionada) {
        case 'Pilates':
            limitePersonas = 10;
            break;
        case 'Trx':
            limitePersonas = 20;
            break;
            case 'Yoga':
                limitePersonas = 15;
                break;
    }
            
            
    // Validar si se excede el límite de personas
    alert(numeroPersonas);
    alert(limitePersonas);
    if (numeroPersonas > limitePersonas) {
        alert('El número de personas excede el límite permitido para la sala seleccionada.');
        // Limpiar el formulario para volver a llenarlo
        //document.getElementById('formulario').reset();
        //event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    } else {
        alert('El número de personas NO excede el límite permitido para la sala seleccionada.');
        // Enviar el formulario si pasa la validación
        //document.getElementById('formulario').submit();
    }
    */
    
});