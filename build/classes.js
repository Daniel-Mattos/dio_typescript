"use strict";
class Character {
    constructor(stregth, skill) {
        this.stregth = stregth,
            this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character(10, 99);
console.log(p1);
p1.attack();
