export class Persona {

    constructor(
        public id: number,
        public name: string,
        public surname: string
    ) {  }

    public toString(): string {
        return `${this.id}, ${this.name}, ${this.surname}`;
        // return this.id + ', ' + this.name + ', ' + this.surname;
    }
}