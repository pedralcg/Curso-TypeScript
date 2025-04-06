"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    //Constructor
    constructor(nombre, cursos, apellidos, edad) {
        this.ID = "123456789";
        // Inicializamos las propiedades
        this.nombre = nombre;
        this.cursos = cursos;
        if (apellidos) {
            this.apellidos = apellidos;
        }
        this.edad = edad ? edad : 18;
    }
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    // get ID_Estudiante(): string{
    //         return this.ID
    // }
    set ID_Estudiante(id) {
        this.ID = id;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map