//punto 1

const param = math.floor((math.random()*(100-1+1))+1)

const numeroRandom = math.floor (param)

const resto = numeroRandom %2

if (resto === 0){
    return "si es par"
    }
    else return "si es impar"

    // punto 2 

const tren = "tren"
const edificio = "edificio"
 if (tren >edificio.lenght) {
    console.log ("la palabra " + tren + "es mas larga que la palabra" + edificio  ) ;
 }

 else if (edificio > tren.lenght ) {

    console.log("la palabra" + edificio + "es mas larga que la palabra" + tren )

 }

 else {
  console.log("las dos palabras tienen la misma cantidad de caracteres")
 }

// punto 3 

let numero = 1

while (numero <10) {
    let indice = numero
    numero = numero + 1
    console.log(indice + "x 9 = "  + indice *9);
}

// punto 4 

function multiplicar ( num) {
    return num * 23
}
let calculo = multiplicar (15);
console.log(calculo)

// punto 5 

 let miLista = []

 for (i=0 ; i<10 ; i++){
    let numeroRandom = math.floor( (math.random() * (100-1+1) +1))
    miLista.push(numeroRandom);

 }
  console.log(miLista)
