//private
//public
//protected
class Character{
	protected name?:string;
	stregth:number;
	skill: number; 

	constructor(name:string,stregth:number,skill:number){
		this.name=name,
		this.stregth=stregth,
		this.skill=skill 
	}

	attack(): void{
		console.log(`Attack with ${this.stregth} points`)
	}
}
class Magician extends Character{
	magicPoints:number
	constructor(name:string,stregth:number,skill:number,magicPoints:number){
		super(name,stregth,skill)
		this.magicPoints=magicPoints;
	}
}


const p1 = new Character("dana",10,99)
const p2 = new Magician("mago",11,4,30)
console.log(p1)

