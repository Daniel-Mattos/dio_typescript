function addNumber(x:number,y:number):number{
	return x+y
}
let soma : number=addNumber(4,7)
console.log(soma)

function addText(name:string){
	return `Hello ${name}`
}

function callPhone(phone:number|string):number|string{
	return phone
}
async function getDatabase(id:number):Promise<string> {
	return "dan"
}
console.log(callPhone(111+"t"))

console.log(addText("dan"))