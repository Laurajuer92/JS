
function calcularResultado(num1, num2, num3) {
    if (num1 > 0) {
        // Si el primer número es positivo, calcular el producto de los otros dos
        var producto = num2 * num3;
        console.log("El producto de los dos últimos números es: " + producto);
    } else {
        // En otro caso, calcular la suma de los tres números
        var suma = num1 + num2 + num3;
        console.log("La suma de los tres números es: " + suma);
    }
}

// Ejemplo de uso
var numero1 = 5;
var numero2 = -2;
var numero3 = 3;

calcularResultado(numero1, numero2, numero3);
