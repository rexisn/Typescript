
abstract class Car{
    name : string
    brand: string 
    price: string 
    constructor(
        name : string ,
        brand  : string ,
        price : string 
    ){
        this.name = name 
        this.brand = brand 
        this.price  = price 
    }

    warner(){
        return `Hey this is ${this.name}, get out of my way or I hit you`
    }
}


//cannot create an instance of an abstract class
//const lambor : Car = new Car("lamborghini" , "lambini", "200k")


class Benz extends Car {
    // page : string 
    // company : string

    warner(){
        console.log(this.warner())
        return `Hey, this is Mercedes benz, Buy a car from us`
    }
    
    

}

const _sclass = new Benz("mercedes benz" , "benz" , "20000");
console.log(_sclass.warner())

const x : number  = 3
const X : number = 3
