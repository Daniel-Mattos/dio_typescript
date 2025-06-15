"use strict";
const bot1 = {
    id: 1,
    name: "dan"
};
const bot2 = {
    id: 1,
    name: "dan",
    sayHello: function () {
        throw new Error("Function not implamented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "daniel");
console.log(p.sayHello());
