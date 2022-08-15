export class Carrera {

    id: number;
    nombre_carrera: string;
    abierta: boolean;
    usuario: number;
    competidores: Array<Competidor>;
    apuestas: Array<Apuesta>

    constructor(
        id: number,
        nombre_carrera: string,
        abierta: boolean,
        usuario: number,
        competidores: Array<Competidor>,
        apuestas: Array<Apuesta>
    ) {
        this.id = id,
            this.nombre_carrera = nombre_carrera,
            this.abierta = abierta,
            this.usuario = usuario,
            this.competidores = competidores,
            this.apuestas = apuestas
    }
}

export class Apuesta {
    id: number;
    valor_apostado: number;
    ganancia: number;
    nombre_apostador: string;
    id_competidor: number;
    id_carrera: number;

    constructor(
        id: number,
        valor_apostado: number,
        ganancia: number,
        nombre_apostador: string,
        id_competidor: number,
        id_carrera: number
    ) {
        this.id = id,
            this.valor_apostado = valor_apostado,
            this.ganancia = ganancia,
            this.nombre_apostador = nombre_apostador,
            this.id_competidor = id_competidor,
            this.id_carrera = id_carrera
    }
}

export class Competidor {
    id: number;
    nombre_competidor: string;
    probabilidad: number;

    constructor(
        id: number,
        nombre_competidor: string,
        probabilidad: number
    ) {
        this.id = id,
            this.nombre_competidor = nombre_competidor,
            this.probabilidad = probabilidad
    }
}
