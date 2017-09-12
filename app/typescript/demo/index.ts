interface IPerson {
    getFullName(): string;
    setLastName(name: string): void; // accepting a string and returning nothing
}

class Person implements IPerson {
    constructor(private readonly firstName: string, private lastName: string) {}

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    setLastName(name: string) {
        this.lastName = name;
    }
}

const originalName = document.querySelector('.name');
const newName = document.querySelector('.new-name');

const p = new Person('Theresa', 'Mayer');
originalName.innerHTML = p.getFullName();

p.setLastName('Smith');
newName.innerHTML = p.getFullName();