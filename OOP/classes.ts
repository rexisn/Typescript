class Student {
    public izina : string 
    public age : number 
    public ishuri : string 

    public  constructor(izina : string , age : number , ishuri: string)  {
        this.izina  = izina 
        this.age = age 
        this.ishuri = ishuri
        console.log("An instance is created");
        
        
    }
}


let mutesa = new Student("Mutesa Cedric" , 16 , "Y1A");