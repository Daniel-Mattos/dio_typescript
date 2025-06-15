type robot={
	readonly id: number|string
	name:string
}
const bot1: robot={
	id:1,
	name:"dan"
}
interface robot2{
	readonly id:number|string;
	name:String;
	sayHello():string
}
const bot2: robot2={
	id:1,
	name:"dan",
	sayHello:function():string{
		throw new Error("Function not implamented.")
	}
}

class Pessoa implements robot2{
	id: string | number;
	name: String;

	constructor(id : string|number,name:string){
		this.id=id
		this.name=name;
	}
	sayHello():string{
		return `hello i'm ${this.name}`
	}

}
const p = new Pessoa(1,"daniel")
console.log(p.sayHello())
//console.log((bot1))
//console.log((bot2.name="rog"))