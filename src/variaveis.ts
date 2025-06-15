let nome : string = "dan";
let idade : number = 1;
let moeda : boolean = true

let vazio : void
let nulo : null
let indefinido : undefined
let qualquer : any = "pode ser qualquer coisa"

let obj:object = {
	nome :"dan",
	idade:12,
	deficiencia:false,
}

type obj_certo = {
	nome : string,
	idade : number,
	def : boolean,
}

let reslt : obj_certo={
	nome:"dan",
	idade:20,
	def:false
}

let lista : string[]=["dan","grasy"]
let lista_tipos : (string | number)[]=["felipe", 31]

//tuplas
let boleto : [string,number,number]=["dan",232,12.4]

let aniversario : Date = new Date("2025-06-09 22:00")
console.log(aniversario.toString())