/* 1. Write a JavaScript function that reverse a number.
    Example x = 32243;
    Expected Output : 34223
*/

type int = number 
type str = string 

function numrev(number : int) : int {
    let revstr : str = ''
    let reversednumber : int = 0
    let numtostr  : string = number.toString()
    let i : int  ;
    for( i = numtostr.length -1 ; i >= 0 ; i--){
        revstr += numtostr[i]
        console.log(revstr);
        
    }
    reversednumber  = parseInt(revstr)
    return reversednumber 
}

//test1 == function passed
let test1 : int  = numrev(12345)
console.log(test1);


//test2 == function passed
let test2 : int = numrev(110001)
console.log(test2);
