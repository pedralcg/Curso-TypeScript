// Esto es un comentario en TS

import {deleteAllCookies, deleteCookie, getCookieValue, setCookie } from "cookies-utils"
import { Curso } from "./models/Curso";
import { LISTA_CURSOS } from "./mock/cursos.mock";
import { Estudiante } from "./models/Estudiante";
import { Jefe, Trabajador } from "./models/Persona";
import { ITarea, Niveles } from "./models/interfaces/ITarea";
import { Programar } from "./models/Programar";
//import { Singleton } from "./patterns/Singleton";


/**
 * Esto es un comentario
 * Multilinea
*/

console.log("Hola Typescript");
console.log("Adiós, Pedro")

// Declaración de Variables:
const nombre:string = "Pedro"; // indicamos el tipo de variable

console.log("Hola, " + nombre);
console.log("¿Que tal", nombre, "?")
console.log(`Como han ido las vacaciones ${nombre}?`) // Despes de ${} Ctrl+Espacio para listar variables

const email = "pedro@email.com";
console.log(`El email de ${nombre} es ${email}`)

const PI:number = 3.1416; // Tipado como number

// var apellidos = "Alcoba" // Tipado automaticamente como string
// apellidos = 3

let apellidos:any = "Alcoba" // Tipado como Any, la variable puede cambiar de tipo
apellidos = 3
console.log(apellidos)

let error; // Una variable no definida se considera tipo any
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
const listaTareas = ["Tarea 1", "Tarea 2", "Tarea 3"]

// Combinación de tipos en listas
const valores: (string | number | boolean)[] = [false, "Hola", true, 69]

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

const estadoTarea: Estados = Estados.Completado
const puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo


// Interfaces

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

// Podemos crear variables que sigan la interface Tarea
const tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
}

console.log(`Tarea: ${tarea1.nombre}`)

// Asignación multiple de variables

const miTarea = {
    titulo: "Mi tarea",
    estado: Estados.Completado,
    urgencia: 1
}

// Declaración 1 a 1
const miTitulo = miTarea.titulo;
const miEstado = miTarea.estado;
const miUrgencia = miTarea.urgencia;

// Declaración con facotr de propagación
const { titulo, estado, urgencia} = miTarea;

// En listas
const listaCompraLunes: string[] = ["Leche", "Huevos", "Pan"]
const listaCompraMartes: string[] = ["Cerveza", "Huevos", "Pan"]
const listaCompraMiercoles: string[] = ["Coca cola", "Huevos", "Pan"]
const listaCompraSemana = [...listaCompraLunes, ...listaCompraMartes, ...listaCompraMiercoles]

// En Objetos
const estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "jwt-token"
}

const nuevoEstado = {
    ...estadoApp,
    session: 4,
}



// Types de TypeScript --> Los tipos definen tipos más complejos, conjuntos de datos (primitivos) que queremos potenciar y/o ampliar
type Producto = {
    precio: number,
    nombre: string
    año: number
}

const coche: Producto = {
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

const listaTareasNueva: Tarea[] = [
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






//* Funciones


/**
 * Función que muestra un saludo por consola
 */
function saludar() {
    const nombre = "Pedro"
    console.log(`Hola ${nombre}`)
}

// Invocación de la función
saludar()



/**
 * Función que muestra un saludo por consola a una persona
 * @param nombre  Nombre de la persona a saludas
 */
function saludarPersona(nombre: string) {
    console.log(`Hola ${nombre}`)
}

saludarPersona("Mario")
// saludarPersona(69)

/**
 * Función que muestra una despedida por consola a una persona
 * @param nombre  Nombre de la persona a despedir, por defecto será Nuka
 */
function despedirPersona(nombre: string = "Nuka") {
    console.log(`Adiós ${nombre}`)
}
despedirPersona() // Adiós Nuka
despedirPersona("yo") // Adiós yo

/**
 * Función que muestra una despedida por consola a una persona
 * @param nombre (opcional) Nombre de la persona a despedir
 */
function despedidaOpcional(nombre?:string) {
// function despedidaOpcional(nombre:string | undefined) {
    if(nombre){
        console.log(`Adiós ${nombre}`)
    } else {
        console.log(`Adiós`)
    }
}

despedidaOpcional("Juan") // Adiós Juan
despedidaOpcional() // Adiós
despedidaOpcional("María") // Adiós María


function variosParams(nombre:string, apellidos?:string, edad:number = 18) {
    if(apellidos){
        console.log(`${nombre} ${apellidos} tiene ${edad} años`)
    } else {
        console.log(`${nombre} tiene ${edad} años`)
    }
}

variosParams("Pedro")
variosParams("Julia", "Fernandez")
// variosParams("Julia", 17)
variosParams("Julia", "", 35)
variosParams("Julia", undefined, 35)
// variosParams(nombre="Pedro", apellidos="Alcoba", edad=34)


function ejemploVariosTipos(a: string | number){
    if(typeof(a)=== "string"){
        console.log("A es un string")
    }else if(typeof(a)=== "number") {
        console.log("A es un number")
    }else{
        console.log("A no es un string ni un number")
        throw Error("A no es un string ni un number")
    }
}

ejemploVariosTipos("Hola")
ejemploVariosTipos(3)
// ejemploVariosTipos(false)


// () => {}
/**
 * 
 * @param nombre Nombre de la persona
 * @param apellidos Apellidos de la persona
 * @returns Nombre completo de la persona
 */
function ejemploReturn(nombre: string, apellidos: string): string /*  definimos el tipado del return de la función*/{
    return `${nombre} ${apellidos}`
}

const nombreCompleto = ejemploReturn("Nuka", "Fernandez")
console.log(nombreCompleto)
console.log(ejemploReturn("Nuka", "Fernandez"))


/**
 * 
 * @param nombres es una lista de nombres de string
 */
function ejemploMultipleParams(...nombres: string[]){
    nombres.forEach((nombre) => {
        console.log(nombre)
    })
}

ejemploMultipleParams("Pedro")
ejemploMultipleParams("Pedro", "Jose", "Lorka", "Marta", "David")


const lista = ["Alberto", "Sandra"]
// ejemploMultipleParams(...lista) Para pasar una lista a parámetros

function ejemploParamsLista(nombres: string[]){
    nombres.forEach((nombre) => {
        console.log(nombre)
    })
}

ejemploParamsLista(lista)



// ARROW Functions


type Empleado = {
    nombre: string
    apellidos: string
    edad: number
}


const empleadoMario: Empleado = {
    nombre: "Mario",
    apellidos: "Alcoba Fernandez",
    edad: 3
}

const mostrarEmpleado = (empleado: Empleado):string => `El empleado ${empleado.nombre} ${empleado.apellidos} tiene ${empleado.edad} años`

const mostrarEmpleado2 = (empleado: Empleado):string => {
    return `El empleado ${empleado.nombre} ${empleado.apellidos} tiene ${empleado.edad} años`
}

// Llamamos al función
mostrarEmpleado(empleadoMario)
console.log(mostrarEmpleado(empleadoMario))
mostrarEmpleado2(empleadoMario)
console.log(mostrarEmpleado2(empleadoMario))


const datosEmpleado = (empleado: Empleado):string => {
    if(empleado.edad > 70){
        return `Empleado ${empleadoMario.nombre} está en edad de jubilación`
    } else if(empleado.edad < 18) {
        return `Empleado ${empleadoMario.nombre} NO tiene edad de trabajar`
    } else {
    return `Empleado ${empleadoMario.nombre} está en edad laboral`
    }
}
console.log(datosEmpleado(empleadoMario))



const obtenerSalario = (empleado: Empleado, cobrar: () => string) => {
    if(empleado.edad > 70){
        return `Empleado ${empleadoMario.nombre} está en edad de jubilación`
    } else if(empleado.edad < 18) {
        return `Empleado ${empleadoMario.nombre} NO tiene edad de trabajar`
    } else {
    cobrar() // callback a ejecutar
    }
}


const cobrarEmpleado = (empleadoMario: Empleado) => {
    console.log(`Empleado ${empleadoMario.nombre} cobra su salario`)
}

obtenerSalario(empleadoMario, () => `Mario cobra una paga`)
console.log(obtenerSalario(empleadoMario, () => `Mario cobra una paga`)
)




//* Funciones asíncronas
//* Async Functions

async function ejemploAsync(): Promise<string>{
    
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones")
    console.log("Tarea completada")
    return ""
}

ejemploAsync().then((respuesta) => {
    console.log("Respuesta", respuesta)
}).catch((error) => {
    console.log("Error", error)
}).finally(() => "Esto se ejecuta siempre")


//* Funciones generadoras
//* Generators

function* ejemploGenerator() {
    
    // Yield
    let index = 0

    while(index < 5){
        yield index++
    }

}

// Guardamos la función generadora en una variable

const generadora = ejemploGenerator()

// Accedemos a los valores emitidos

console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)


// Worker

function* watcher(valor: number){
    
    yield valor // emitimos el valor inicial
    yield* worker(valor) // Llamamos a las emisiones del worker para que emita otros valores
    yield valor + 10 // emitimos el valor final +10
    
}

function* worker(valor:number){
    yield valor +1
    yield valor +2
    yield valor +3
}

const generatorSaga = watcher(0)

console.log(generatorSaga.next().value) // Lo ha hecho el watcher
console.log(generatorSaga.next().value) // Lo ha hecho el worker
console.log(generatorSaga.next().value) // Lo ha hecho el worker
console.log(generatorSaga.next().value) // Lo ha hecho el worker
console.log(generatorSaga.next().value) // Lo ha hecho el watcher
console.log(generatorSaga.next().value)



//* Sobrecarga de funciones

// function mostrarError(error: string): void{
//     console.log("Ha habido un error: ", error)
// }

// function mostrarError(error: number): void{
//     console.log("Ha habido un error: ", error)
// }

function mostrarError(error: string | number): void{
    console.log("Ha habido un error: ", error)
}





//* Persistencia de datos

// 1. Local Storage --> Almacena los datos en el navegador (no se eliminan automaticamente)
// 2. Session Storage --> La diferencia radica en la sesión del navegador. Los datos persisten en la sesión del navegador
// 3. Cookies --> Tienen una fecha de caducidad y tambieén tienen un ámbito de URL



// LocalStorage

// function guardarEnLocalStorage(): void{
//     localStorage.setItem("nombre", "Pedro")
// }

// function leer(): void{
//     let nombre = localStorage.getItem("nombre")
//     console.log("Nombre: ", nombre)
// }



//todo Desactivado por error "self is no definided"
// //* Cookies

// const cookieOptions = {
//     name: "usuario", //string
//     value: "Pedro", //string
//     maxAge: 10 * 60, //optional number (value in seconds)
//     expires: new Date(2099, 10, 1), //optional DAte
//     path: "/" //optional string
// }


// // Seteamos la Cookie

// setCookie(cookieOptions)


// // Leer una Cookie

// let cookieLeida = getCookieValue("usuario")
// console.log(cookieLeida)


// // Eliminamos la Cookie

// deleteCookie("usuario")


// // Eliminar todas las Cookies

// deleteAllCookies()




//* // ------------------------------------------------------- //


// Clase Temporizador

class Temporizador {
    public terminar?: (tiempo: number) => void

    public empezar(): void{
        setTimeout(() => {
            // Comprobamos que exista la función terminar como callback
            if(!this.terminar) return

            // Cuando haya pasado el tiempo, se ejecutara la función terminar
            this.terminar(Date.now())
        }, 10000)
    }
}

const miTemporizador: Temporizador = new Temporizador()

//Definimos la función del Callback a ejecutar cuando termine el tiempo

miTemporizador.terminar = (tiempo: number) => {
    console.log("Evento terminado: ", tiempo)
}

//Lanzamos el temporizador

miTemporizador.empezar() // Iniciará el timeut y cuando termine, ejecuta la función terminar()



setInterval(() => console.log("Tic, Tac"), 1000) // Imprimir "tic" cada segundo por consola


// Eliminar la ejecución de la función
delete miTemporizador.terminar




// Extender de EventTarget













// Creamos un curso

// const cursoTS: Curso = new Curso("TypeScript", 15)
// const cursoJS: Curso = new Curso("JavaScript", 20)

// const listaCursos: Curso[] = []
// listaCursos.push(cursoTS, cursoJS) // Lista de cursos



// Usamos el MOCK

const listaCursos: Curso[] = LISTA_CURSOS



// Creamos un estudiante

const mario: Estudiante = new Estudiante("Mario", listaCursos, "Alcoba", 3)

console.log(`${mario.nombre} estudia: `)
mario.cursos.forEach((curso: Curso) => {
    console.log(`${curso.nombre} - ${curso.horas} horas`)
})

const cursoAngular: Curso = new Curso("Angular", 40)
mario.cursos.push(cursoAngular)


// Conocer las horas Estudiadas

mario.horasEstudiadas // Nos devovlerá un number

mario.ID_Estudiante // Nos devolverá la ID privada de estudiante





// Saber la instancia de un objeto / variable

// - TypeOf -> Devuelve una cadena que indica el tipo de un valor

// - InsanceOf -> Verifica si un objeto pertenece a una clase específica o a su prototipo


const fechaNacimiento = new Date(1990, 8, 1)
if(fechaNacimiento instanceof Date){
    console.log("Es una instancia de Date")
}


if(mario instanceof Estudiante){
    console.log("Mario es un Estudiante")
}





//* Herencia y Polimorfismo

const trabajador1 = new Trabajador("Pedro", "Alcoba", 34, 1700)
const trabajador2 = new Trabajador("David", "Sanchez", 35, 2000)
const trabajador3 = new Trabajador("Juan", "Villaplana", 35, 1300)



const jefe = new Jefe("Julia", "Fernandez", 35)

jefe.trabajadores.push(trabajador1, trabajador2, trabajador3)


trabajador1.saludar() // Especificado/sobreescrito en Empleado
jefe.saludar() // Herencia de Persona


jefe.trabajadores.forEach((trabajador: Trabajador) => {
    trabajador.saludar() // Especificado en Trabajador
})




//* Usos de Interfaces

const programar: ITarea = {
    titulo: "Programar en TypeScript",
    descripción: "Practicar con Katas para aprender a desarrollar con TS",
    completada: false,
    urgencia : Niveles.Urgente,
    resumen: function():string{
        return `${this.titulo} - ${this.descripción} - ${this.completada} - ${this.urgencia}`
    }
}

console.log(programar.resumen())



// Tarea de Programación (implementa ITarea)

const programarTS = new Programar("TypeScript", "Tarea de programación en TS", false, Niveles.Bloqueante)
console.log(programarTS.resumen())



//* Decoradores experimentales --> @

// - Clases -->
// - Parámetros -->
// - Métodos -->
// - Propiedades -->


// function Override(label: string){
//     return function (target:any, key:string){
//         Object.defineProperty(target, key, {
//             configurable: false,
//             get: () => label
//         })
//     }
// }

// class PruebaDecorador {
//     @Override("prueba") // Llamar a la función Override
//     nombre: string = "Pedro"
// }

// let prueba = new PruebaDecorador()
// console.log(prueba.nombre) // "Prueba" siempre va a ser devuelto a través del get()



// Otra función para usarla com odecorador

// function Sololectura (target:any, key:string){
//     Object.defineProperty(target, key, {
//         writable: false
//     })
// }

// class PruebaSoloLectura {
//     @Sololectura
//     nombre: string = ""
// }

// let pruebaLectura = new PruebaSoloLectura()
// pruebaLectura.nombre = "Ana"
// // console.log(pruebaLectura.nombre) // ==> Undefined, ya que no se le puede dar valor (es solo de lectura)


// Decorador para parámetros de un método

// function mostrarPosicion(target:any, propertyKey: string, parameterIndex: number){
//     console.log("Posición", parameterIndex)
// }

// class PruebaMetodoDecorador{
//     prueba(a: string, @mostrarPosicion b: boolean){
//         console.log(b)
//     }
// }

// // Usamos el método con el parámetro y su decoración
// new PruebaMetodoDecorador().prueba("Hola", false)





//! Falta Video 7 - 
//!  Patrones de diseño, técnicas de refactorización, sitios para encontrar información y restructuración de código para usarlo de ejemplo

//Comprimido en zip y haber compartido el proyecto


//! Patrones creacionales

// const miPrimerSingleton = Singleton.getInstance()
// const miSegundoSingleton = Singleton.getInstance()

// // Comprueba si ambas son inguales
// if (miPrimerSingleton === miSegundoSingleton) {
//     console.log(" Singleton funciona correctamente, ambas variables contienen la misma instancia.")
//     miPrimerSingleton,nostrarPorConsola()
//     miSegundoSingleton.mostrarPorConsola()
// } else {
//     console.log(" Singleton falló, las variables contienen instancias diferentes.")
//     }


/**
  * Patrones de diseño existentes.
  * Técnicas de refactorización de código.
  * Comentarios sobre sitios donde se puede encontrar información relevante a estos temas.
  * Cómo reestructurar el código y utilizarlo como ejemplo.
  */








