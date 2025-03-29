/**
 * Esto es un comentario
 * Multilinea
*/

console.log("Hola Typescript");
console.log("Adiós, Pedro")

// Declaración de Variables:
var nombre:string = "Pedro"; // indicamos el tipo de variable

console.log("Hola, " + nombre);
console.log("¿Que tal", nombre, "?")
console.log(`Como han ido las vacaciones ${nombre}?`) // Despes de ${} Ctrl+Espacio para listar variables

let email = "pedro@email.com";
console.log(`El email de ${nombre} es ${email}`)

const PI:number = 3.1416; // Tipado como number

// var apellidos = "Alcoba" // Tipado automaticamente como string
// apellidos = 3

var apellidos:any = "Alcoba" // Tipado como Any, la variable puede cambiar de tipo
apellidos = 3
console.log(apellidos)

var error; // Una variable no definida se considera tipo any
error = false;

console.log(`¿Hay error?: ${error}`)


//** Instanciación múltiple de variable

// let a, b, c; //Instancia de 3 variables sin valor inicial ANY

let a:string, b:boolean, c:number; //Instancia de 3 variables sin valor inicial ANY
a = "TypeScript";
b = false;
c = 8.9;

// BuiltIn Types: number, string, boolean, void, null y undefined

//* Tipos más complejos

// Lista de cadenas de texto
let listaTareas = ["Tarea 1", "Tarea 2", "Tarea 3"]

// Combinación de tipos en listas
let valores: (string | number | boolean)[] = [false, "Hola", true, 69]

// Enumerados

enum Estados {
    "Completado" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P"
}

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados = Estados.Completado
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo


// Interfaces

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

// Podemos crear variables que sigan la interface Tarea
let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
}

console.log(`Tarea: ${tarea1.nombre}`)

// Asignación multiple de variables

let miTarea = {
    titulo: "Mi tarea",
    estado: Estados.Completado,
    urgencia: 1
}

// Declaración 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;

// Declaración con facotr de propagación
let { titulo, estado, urgencia} = miTarea;

// En listas
let listaCompraLunes: string[] = ["Leche", "Huevos", "Pan"]
let listaCompraMartes: string[] = ["Cerveza", "Huevos", "Pan"]
let listaCompraMiercoles: string[] = ["Coca cola", "Huevos", "Pan"]
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMartes, ...listaCompraMiercoles]

// En Objetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "jwt-token"
}

let nuevoEstado = {
    ...estadoApp,
    session: 4,
}



// Types de TypeScript --> Los tipos definen tipos más complejos, conjuntos de datos (primitivos) que queremos potenciar y/o ampliar
type Producto = {
    precio: number,
    nombre: string
    año: number
}

let coche: Producto = {
    nombre: "Peugeot",
    precio: 4750,
    año:2006
}

console.log(`El coche: ${coche.nombre} del años ${coche.año} vale ${coche.precio} euros`)


//* Condicionales

// Operador ternario          Condición "?" Si true: ejecuta este código ":" Si false: ejecuta este otro código
console.log(coche.año < 2010 ? `El coche: ${coche.nombre} es muy viejo` : `El coche: ${coche.nombre} es muy viejo`)


// If - else
if (error) {
    console.log("Hay un error");
} else {
    console.log("No hay error");
}


// If - else if - else
if(coche.año < 2010){
    console.log(`El coche: ${coche.nombre} es muy viejo`)
} else if (coche.año === 2010){
    console.log(`El coche: ${coche.nombre} es del año 2010`)
} else { 
    console.log(`El coche: ${coche.nombre} es nuevo`)
}

// Switch
switch (tarea1.estado){
    case Estados.Completado:
        console.log("La tarea está completada")
        break;
    case Estados.Incompleto:
        console.log("La tarea no está completada")
        break;
    case Estados.Pendiente:
        console.log("La tarea está pendiente")
        break;
    default:
        console.log("No se conoce el estado")
        break;
}


//* Bucles

let listaTareasNueva: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 5
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Incompleto,
        urgencia: 15
    }
]


// Bucle For clásico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`)
}


// Bucle ForEach
listaTareasNueva.forEach(
    (tarea: Tarea, index: number) => {
        console.log(`${index} - ${tarea.nombre}`)
    }
);


// // Bucle ForIf - No útiles con listas
// for (const key in tarea1){
//     if (Object.prototype.hasOwnProperty.call(tarea1, key)) {
//         const element = tarea1[key];
//         console.log(`${key} : ${element}`)
//     }
// }


// Bucles While
while (tarea1.estado !== Estados.Completado) {
    if(tarea1.urgencia == 20){
        tarea1.estado = Estados.Completado;
        break;
    } else {
        tarea1.urgencia++;
    }

}


// Do While
do {
    tarea1.urgencia ++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);

