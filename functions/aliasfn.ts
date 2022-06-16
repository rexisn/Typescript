type addtwonumbers = (x: number , y: number) => number
const addnumbers : addtwonumbers = (x,y) => x+y

console.log(addnumbers(2,3))


type stringreverser = (x : string ) => string 

const strrev : stringreverser = (string : string) => {
    const rev  = string.split('').reverse().concat("")
    let reversed : string = "" ;
    for(let lett of rev){
        reversed += lett
    }

    return reversed
}


console.log(strrev("inyanya"))