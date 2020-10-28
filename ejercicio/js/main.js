
/*1 - Haz una función capaz de revertir el orden de los caracteres de un string dado por un usuario.*/

function invertir(cadena) {
    cadena = "PAULA"
    let x = cadena.length;
    let cadenaInvertida = "";
  
    while (x >= 0) {
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }
    console.log(cadenaInvertida);
    return cadenaInvertida;
}

// 2 - Construye una función que sea capaz de comprobar si una variable es un array o no lo es

let arr = [1, 2, 3];
let result = Array.isArray(arr);
console.log (result);

//3 - Construye una función capaz de clonar un array.

 let arr2 = [3,5,7];
 let arrCopy = [];
 for (i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i];
  }
  console.log(arrCopy);

//4 - Escribe una función capaz de borrar elementos duplicados del siguiente array.

let array1 = ["Lunes","Martes","Miércoles","Lunes","Jueves","Viernes","Viernes","Sabado","Domingo"];

let resultado = array1.filter((item,index) => {
    return array1.indexOf(item) === index;
});
  
console.log(resultado); 

//5 - Escribe una función capaz de concatenar dos arrays.

let array2 = [1,2,3,4,5,6,7,8,9]; 
let array3 = [10,11,2,3,4,12,13,14,15];
let arrConc = array2.concat(array3);
console.log(arrConc);

/*6 - Modifica la función anterior para excluir aquellos elementos que se repitan en el array concatenado.*/

let remove = arrConc.filter((item, index) => {
    return arrConc.indexOf(item) === index;
});
console.log(remove);

/*7 - Diseña una función en Javascript que acepte un número como parámetro y compruebe si este número
es primo o no.*/

const primo = (num) => { 
    
        for (let i=2; i < num; i++){
            if(num % i === 0){
                return false;
            }
        }
   return numero !== 1; 
}

/*8 - Diseña una función en Javascript de tipo promesa que genere un array con 5 números aleatorios, una vez hecho esto, pedirá un número al usuario mediante prompt y comprobará si el número introducido coincide con uno de los 5 generados aleatoriamente por el array. en caso de coincidir devolverá un resolve, caso contrario reject. El espectro de los números tanto aleatorios como el introducido por el usuario será del 1 al 10.*/

const prom = () => {
    
    let random = Math.random() * 10;
  
    const result2 = new Promise ((resolve,reject)=> {
        let num = parseInt(prompt('Introduce un numero:'))
        if (num  === random){
            resolve(console.log('El numero introducido es coincide'))
        }else {
            reject(console.log ('El numero no coincide'))
        }
    })
    return result2;
}