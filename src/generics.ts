function concatArray<T>(...itens:T[]):T[]{
	return new Array().concat(...itens)
}

const numArray = concatArray<number[]>([1,5],[3])
const stgArray= concatArray<string[]>(["dan","grasy"],["rog"])

console.log(numArray)
console.log(stgArray)

//npm install ts-node-dev -D