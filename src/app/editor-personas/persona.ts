export class Persona {

    constructor (
        public id: number,
        public nombres: string,
        public apellido: string,
        public fechaNacimiento: string
    ) {}

    public toString(): string {
        return Object.keys(this)
            .reduce((accumulator, currentValue) => 
                `${accumulator}, ${this[currentValue]}`)
    }
}