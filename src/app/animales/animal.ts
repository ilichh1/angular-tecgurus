import { Persona } from "../personas/persona";

export class Animal {
    constructor(
        public id: number,
        public nombre: string,
        public cuidador: Persona
    ) {  }
}
