// Console Log

console.log("Hola")


const lista = ["Uno", "Dos", "Tres"]
lista.forEach(() => console.log)

const nombre = "Martín"
console.log(`Hola, ${nombre}`)

// Console Clear
console.clear()

// Console Assert
const a: number = 100
console.assert( a === 1000, "Mensaje", `Otro mensaje: ${a}`)

// Console Count
function contador(texto: string){
    console.count(texto)
}

contador("Hola") //1
contador("Adios") //1 
contador("Hola") //2

console.countReset() // Reseteo del contador


// Console Info, Warn o Error

console.info("Texto informativo")
console.warn("Texto de aviso")
console.error("Texto de error")


// Console Trace

function uno(){
    dos()
}

function dos(){
    tres()
}

function tres(){
    console.trace() // Trazar por donde se ha ido ejecutando para llegar a este punto
}

uno() // inicia el trace por consola



// Console DIR --> mostrar valores de objetos de manera bonita

const coche = {
    nombre: "Peugeot",
    matriculas: "3018DVP",
    especificaciones: [
        {
            motor: "v12",
            potencia: "poquita"
        }
    ]
}

console.dir(coche)

// Console TABLE --> mostrar objetos o listas en tablas
console.table(coche)

// Console TIME --> contabilizar el tiempo de ejecución
function espera (){
    for(let index = 0; index < 1000; index++){
        //...
    }
}
console.time("Prueba") // inicia el cronómetro
espera() //ejecución
console.timeEnd("Prueba") // terminar y contabilizar el tiempo que ha pasado


// Console. GROUP --> Agrupaciones de console

console.group("Números")
console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.groupEnd()