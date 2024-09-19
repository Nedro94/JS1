//ingresar operacion
function calcular() {
  let continuar = true; // Variable para continuar o detener el bucle

    const operacion = prompt("Ingrese 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir o cualquier otra tecla para finalizar:");
  
    // Validar
    if (operacion !== '1' && operacion !== '2'&& operacion !== '3'&& operacion !== '4') {
      alert("Fin del bucle");
      operacion = 0;
      continuar = false; // Cambiar la variable para salir del bucle
    }else{
          // Pedir numeros
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
  
    // variable para el resultado
    let resultado;
    let simbolo;
  
    // Tipos de operaciones
    if (operacion === '1') {
      resultado = num1 + num2;
      simbolo= ' + '
    } else if (operacion === '2') {
      resultado = num1 - num2;
      simbolo= ' - '
    }else if (operacion === '3') {
      resultado = num1 * num2;
      simbolo= ' * '
    }else if (operacion === '4') {
      resultado = num1 / num2;
      simbolo= ' / '
    }

    alert(num1 + simbolo + num2 +' = '+ resultado);

    //repite el bucle hasta darse condicion de cierre
    if(operacion!=0){
      calcular();
      }
    }
  }
  
  // Llamar a la función para ejecutar la calculadora
  calcular();