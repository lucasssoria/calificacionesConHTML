import "./styles.css";

/*calificaciones
  practica 10%
  problemas 50%
  teorica 40&
  nota final

ingreso de 
  nombre de alumno + 3 notas
  se da el resultado
entra en bucle hasta recibir una caneda vacia 
nota entre 0 y 10 de lo contrario vuelve a pedir nota*/
let user = document.getElementById("user");
let btnSend = document.getElementById("btnSend");
let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let notaFinal = 0;
let alumno: string = "";
function pedirNombre() {
  alumno = String(
    prompt(
      "Si desea terminar la carga de alumnos ingrese un espacio vacio.\nA continuacion ingrese el nombre de su alumno/a:"
    )
  );
  return alumno;
}
function saludar() {
  return alert("¡Bienvenido/a " + String(user.value) + "!");
}
btnSend.addEventListener("click", () => {
  saludar();
  pedirNombre();
  while (alumno !== " ") {
    nota1 = Number(prompt("Ingrese la nota de la parte practica: "));
    if (nota1 > 0 && nota1 <= 10) {
      nota2 = Number(prompt("Ingrese la nota de la parte de problemas: "));
      if (nota2 > 0 && nota2 <= 10) {
        nota3 = Number(prompt("Ingrese la nota de la parte teórica: "));
        if (nota3 > 0 && nota3 <= 10) {
          nota1 = (nota1 * 10) / 100;
          nota2 = (nota2 * 50) / 100;
          nota3 = (nota3 * 40) / 100;
          notaFinal = nota1 + nota2 + nota3;

          alert("La nota final de " + alumno + " es: " + notaFinal);
          pedirNombre();
        } else {
          alert("Ingrese un numero entre 1 y 10.");
          pedirNombre();
        }
      } else {
        alert("Ingrese un numero entre 1 y 10.");
        pedirNombre();
      }
    } else {
      alert("Ingrese un numero entre 1 y 10.");
      pedirNombre();
    }
  }
  console.log("Fin");
});
