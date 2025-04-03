import { ITarea, Niveles } from "./interfaces/ITarea"

export class Programar implements ITarea{
    titulo: string
    descripción?: string
    completada: boolean
    urgencia?: Niveles

    constructor(titulo: string, descripción: string, completada: boolean, urgencia: Niveles){
        this.titulo = titulo
        this.descripción = descripción
        this.completada = completada
        this.urgencia = urgencia
    }

    resumen = () => {
        return `Tarea de Programación: ${this.titulo} - ${this.completada}`
    }
}