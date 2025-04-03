export enum Niveles{
    "Informativa",
    "Urgente",
    "Bloqueante"
}

// Interface sirve para definir la firma y los puntos necesarios a implementar por quien la use
export interface ITarea{
    titulo: string
    descripción?: string
    completada: boolean
    urgencia?: Niveles
    resumen: () => string
}


