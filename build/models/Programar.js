"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programar = void 0;
class Programar {
    constructor(titulo, descripción, completada, urgencia) {
        this.resumen = () => {
            return `Tarea de Programación: ${this.titulo} - ${this.completada}`;
        };
        this.titulo = titulo;
        this.descripción = descripción;
        this.completada = completada;
        this.urgencia = urgencia;
    }
}
exports.Programar = Programar;
//# sourceMappingURL=Programar.js.map