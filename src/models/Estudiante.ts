import { Curso } from "../models/Curso"

export class Estudiante{

    //Propiedades de clase
    nombre:string
    apellidos?:string
    edad?:number
    cursos: Curso[]
    private ID: string = "123456789"

    //Constructor
    constructor(nombre:string, cursos: Curso[], apellidos?:string, edad?:number){
        // Inicializamos las propiedades
        this.nombre = nombre
        this.cursos = cursos
        if(apellidos){
            this.apellidos = apellidos
        }
        this.edad = edad?edad: 18
    }
    get horasEstudiadas(){

        let horasEstudiadas = 0

        this.cursos.forEach((curso:Curso) => {
            horasEstudiadas += curso.horas
        })

        return horasEstudiadas
    }

    // get ID_Estudiante(): string{
    //         return this.ID
    // }

    set ID_Estudiante(id: string) {
        this.ID = id;
    }

}



