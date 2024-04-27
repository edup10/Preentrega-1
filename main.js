// Solicitar al usuario la cantidad de estudiantes en la clase
function contarAprobadosReprobados() {
let cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes en la clase:"));

// Inicializar contadores para aprobados y reprobados
let aprobados = 0;
let reprobados = 0;

// Iterar sobre cada estudiante para obtener su nombre y nota, y realizar el conteo
for (let i = 0; i < cantidadEstudiantes; i++) {
    let nombre = prompt("Ingrese el nombre del estudiante " + (i + 1) + ":");
    let nota = parseFloat(prompt("Ingrese la nota de " + nombre + ":"));

    // Verificar si la nota es válida
    if (!isNaN(nota)) {
        if (nota >= 4) {
            aprobados++;
        } else {
            reprobados++;
        }
    } else {
        alert("Por favor, ingrese una nota válida para " + nombre);
        i--; // Retroceder el contador para volver a solicitar la nota del estudiante
    }
}

// Mostrar los resultados
alert("Cantidad de estudiantes aprobados: " + aprobados + "\nCantidad de estudiantes reprobados: " + reprobados);
}

contarAprobadosReprobados();