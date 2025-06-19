
function usarString() {
    // Uso de strings Ejemplo
    let nombre = prompt("Marcelo"); // Variable tipo texto
    // Uso de length --> Largo de una variable
    let primeraLetra = nombre[0];
    //Asignamos valor a primera letra con posición 0 de nombre
    let ultimaLetra = nombre[nombre.length - 1];
    alert("Primera letra es: " + primeraLetra +
        "\nUltima letra es: " + ultimaLetra);
    //Mostrar resultado
}
// Tarea: Imprimir segunda letra
// y penultima letra del apellido 

function manipularApellido() {
    let apellido = prompt("Rios");
    //Segunda letra del apellido
    let segundaLetraApellido = apellido[1];
    // Penúltima letra del apellido
    let penultimaLetraApellido = apellido[apellido.length - 2];
    //Mostrar resultado

    //No se puede modificar porque es inmutable
    apellido[1] = "j"; // No funciona
    alert("Segunda letra del apellido es: " + segundaLetraApellido +
        "\nPenúltima letra del apellido es: " + penultimaLetraApellido
    );
}