// Ejercicios Condiciones IF - ELSE
console.log("Conexión con js establecida...");

/* Edad para votar
 Solicita la edad del usuario mediante prompt(). 
 Muestra con alert() si puede votar 
 (18 años o más) o no.
*/
function edadVotar() {
    let edad = parseInt(prompt("Ingrese su Edad: ")); // Input converción string a número
    //Condición if - else if - else
    if (edad >= 18) {
        alert("Su edad " + edad + " aprobada para votar.");
    } else if (edad >= 0 && edad < 18) { // && Compuerta AND
        alert("Su edad " + edad + " no esta aprobada para votar.");
    } else {
        alert("Ingrese un valor válido");
    }
};



/* Contraseña válida
 Pide una contraseña con prompt(). 
 Si es igual a "1234", muestra un mensaje de acceso permitido. 
 En caso contrario, muestra acceso denegado.
 */
function validarPassword() {
    let clave = "1234"
    let pass = prompt("Ingrese su contraseña: ");

    if (pass == clave) {
        alert("Acceso permitido...");
    } else {
        alert("Acceso Denegado");
    }
};


/* Verificar par o impar
 Pide un número por prompt(). 
 Evalúa si el número es par o impar y muestra el resultado con alert(). 
*/
function parImpar() {
    let numero = parseInt(prompt("Ingresar Numero"));
    if (numero % 2 == 0) {
        alert("Es par");
    } else {
        alert("Es impar");
    }
};


/*Temperatura ambiental
 Solicita la temperatura actual. 
 Si es mayor o igual a 30, muestra “Hace calor”, 
 de lo contrario muestra “Clima agradable”. 
 */
function temperaturaAmbiental() {
    let temperatura = parseInt(prompt("Ingresar Temperatura"));
    if (temperatura >= 30 && temperatura <= 50) {
        alert("Hace calor");
    } else if (temperatura >= 15 && temperatura < 30) {
        alert("Agradable");
    } else if (temperatura >= -5 && temperatura <= 15) {
        alert("Hace Frio");
    } else {
        alert("Ingrese un valor válido");
    }
};


/*Comparar dos números
 Solicita dos números al usuario. 
 Compara ambos y muestra cuál es mayor o si son iguales. 
 */
function compararNumeros() {
    let num1 = parseInt(prompt("Ingresar primer numero"));
    let num2 = parseInt(prompt("Ingresar segundo numero"));
    if (num1 < num2) {
        alert("el numero " + num1 + " es menor que " + num2);
    } else if (num1 == num2) {
        alert("el numero " + num1 + " es igual que " + num2);
    } else {
        alert("el numero " + num1 + " es mayor que " + num2);
    }
};


/*Calificación escolar
 Pide una nota entre 1 y 7. 
 Si es 4 o más, muestra “Aprobado”, 
 si es menor, muestra “Reprobado”. 
 */
function note() {
    let ingresa = parseInt(prompt("ingresa tu nota: "));
    if (ingresa < 4) {
        alert("desaprobado");
    } else if (ingresa >= 4 && ingresa <= 7) {
        alert("aprobado");
    } else {
        alert("por favor, ingresar valor valido");
    }
};


/*Nombre de usuario válido
 Pide un nombre de usuario. 
 Si el valor ingresado es "admin", muestra “Bienvenido, administrador”. 
 Si no, muestra “Usuario no reconocido”. 
 */
function usuarioAdmin() {
    let usu = prompt("Ingrese usuario")
    if (usu == "marck068") {
        alert("Bienvenido, administrador")
    } else {
        alert("Usuario no reconocido")
    }
};


/*Verificar si una palabra empieza con "A"
 Pide una palabra al usuario. 
 Verifica si empieza con la letra “A” mayúscula y muestra un mensaje acorde. 
 */
function palabraMayuscula() {
    let letra = prompt("Ingresa palabra");
    let letraA = "A";
    if (letra[0] == letraA) {
        alert("la palabra comienza con a mayuscula");
    } else {
        alert("la palabra no comienza con a matuscula");
    }
};


/*Precio con descuento
 Solicita el precio de un producto. 
 Si el precio es mayor a 10000, muestra que aplica descuento. 
 Si no, indica precio normal. 
 */
function precioDescuento() {
    let precio = prompt("Ingrese precio del producto")
    if (precio > 10000) {
        alert(" Tiene un descuento ");
    } else if (precio <= 10000) {
        alert(" No tiene descuento ");
    } else {
        alert(" Error del sistema ");
    }
};


/*Verificar si una persona puede conducir
 Solicita la edad del usuario y si tiene licencia (por ejemplo, respondiendo "sí" o "no"). 
 Si tiene 18 o más y respondió que tiene licencia, muestra “Puede conducir”. 
 Si no, muestra “No puede conducir”. 
 */
function conducir() {
    let edad = prompt("Tiene edad para conducir")
    let licencia = prompt("Tiene licencia para conducir")
    if (edad >= 18 && licencia == "si") {
        alert("Puede conducir");
    } else if (edad < 18 && licencia == "no") {
        alert("No puede conducir");
    } else if (edad < 18 && licencia == "si") {
        alert("no debe conducir");
    } else if (edad >= 18 && licencia == "no") {
        alert("No debe conducir");
    }
};