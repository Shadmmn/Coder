
let edad = 23;
const ALTURA = 165;
 console.log("lA ALTURA ES", ALTURA);

let numero = 23;
let numeroDos= 22;
let suma = numero + numeroDos;

let saludo = "hola ";
let nombre = "franco"


let mensaje = saludo + " " + nombre;
let mensajeUno= `${saludo} ${nombre} + Que se cuenta?`;
console.log(mensajeUno)
console.log(mensaje)
// esos simbolos ` sirven para reemplazar variables 

let nombre2 = prompt("ingresa tu nombre"); 
after = alert (saludo+nombre2);

if(nombre===true){
    alert(Bienvenido)
}



//
function Calcular() {
    const monto = document.querySelector("#monto").value;
    if(meses === 6){
      inter === 0.25;  
    }
    else if(meses === 12){
        inter === 0.50;
    }else{
        inter === 0.75;
    }
    const interes = (monto *  inter) / meses;
    const total = ((monto / meses) + interes).toFixed(2);
    document.querySelector("#total")
        alert ("Cuotas de : " + total);
}