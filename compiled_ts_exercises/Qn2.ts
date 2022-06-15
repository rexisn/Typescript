//function that checks if a given string is a palindrome or not

function isPalindrome(string : string) : boolean {

    let reversed_string : string   = ''

    for(let i : number = string.length - 1 ; i >= 0 ; i--){
        reversed_string+= string[i]
    }
    console.log(reversed_string);
    switch (reversed_string == string ) {
        case true:
            return true 
            break
        case false:
            return false
            break
    }
}


let q2test1 : boolean = isPalindrome('nursesrun')
console.log(q2test1)