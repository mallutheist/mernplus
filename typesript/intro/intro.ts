let name: string = 'ajmal';


export { }


//point 2 :
//consider a function 

////////////functions ///////////////////////////////////////

//case 1

function addtwo(val) {
    return val + 2;
}


addtwo('people');   // this cant be possible because the parameter in the function is ongoing numerical
//  actions and here we are passing argument value of string. to avoid that write function like this

//correct form 

function addTwo(val: number) {     //function camel case to avoid repetition error
    return val + 2;
};

addTwo(2);                      // now wecant pass only type of number as argument//try other wise


//case 2
//error of return in function
//consider this eg

let addthree = (val: number) => {    //here return value is expected as number but it is in string. 
    return 'hello'
}

let x = addthree(3)    // so to solve this issue we have to assign value to 'return' also

///correct form

function addThree(val: number): number {   // number outside paramater indicate typefor return
    return val + 3;
    return 'ajmal' //..................>  will be error if write like this
}

let y = addThree(3)

//if it is arrow function

let addthreee = (val: number): number => {
    return val + 2
}




// case 3
//when you dont have the return valueee

function consolvalue(val: string) {
    console.log(val);           // here there is noreturn value.inorder to throw error when someone
}                           // return anything modify code as below


function consoleValue(val: string): void {    // void means no return
    console.log(val);
    return val  // ....................................> look at the error
}

// here thetype of returnis void. 'never' is used instead ofvoid if we dont want returnvalue








/////////////////////////////////////////ALIASES////////////////////////////////////////////////////////////////////

/* 
in typescript we can create our own types. type aliases, also known as type synonyms, provide a way
to create a new name for an existing type. This can be useful for making code more readable and maintainable,
especially when dealing with complex or frequently used types. Type aliases do not create a 
new type; instead, they provide an alternative name for an existing type.  
 */

// eg

type User = {
    name: string,
    email: string,
    islogged: boolean
}

// we can now use this as type even as parameter of a function

function createUser(user: User) { }      //.................here type is used as User

// another eg

type mystring = string; //.......now we can use mystring instead of the type string

// we can also use this for return type

// we can also join 2 types into 1
//for eg

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate  // here both types are joined 









//////////////READ ONLY/////////////////////////////////////////////////////////////////////////

//consider this example

type Userr = {
    readonly _id: string       // here readonly is used so that it cant be changed after assigning
    name: string
    email: string
    isActive: boolean
}

//for eg

let myUser: Userr = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false,
}

myUser.email = 'ajmal'
myUser._id = 'hfbb' //.....................>error because this cant be changed because it is readonly

/////////////optional/////////////////////////////////////////


type Userrr = {
    _id: string
    name: string
    email: string
    isActive: boolean
    creditcarddetails: number
}

let myUserr: Userrr = {
    _id: "1245",
    name: "h",           // here it is error because creditcard is not used here so we can kept
    email: "h@h.com",    //  as optional
    isActive: false,

}


type uuser = {
    _id: string
    name: string
    email: string
    isActive: boolean
    creditcarddetails?: number // a question mark is used to indicate it as optional
}

let myuuser: uuser = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false,       // now no error because it is optional
}









///////////////////////////////////ARRAYS//////////////////////////////////////////////////////////////////////////

const superHeros: string[] = []

superHeros.push("spiderman")  // this is how array is declared

//or

const supermen: number[] = []
supermen.push(3)






////////////////////////////////////UNION TYPES////////////////////////////////////////////////////////
//    
//    here we can assign a union of 2 types to a variable
//     eg :

let score: number | string = 33
score = 44
score = "55"
score = false; //....................> error, only number and string


//eg of array

const data3: (string | number)[] = ["1", "2", 3, 4, 5]  //you can have both the values

////////////////////////////////////////////TUPLES///////////////////////////////////////////////////////////////////////////

// look at the above example , here the types are written inside the square bracket and there is an error
// why it is error? when we write inside it is called tuples and it has order, and should definite no of
// values that of the denotation here denoted only 2 types so there should be only two values

const data4: [string, number] = [1, '2']  //here in annotation first string and then number that is order of tuple
const data5: [string, number] = ['1', 2]  // no error
const data6: [string, number] = ['1', 2, 3] // again error because of 3 values only two is possible

/////////////////////////////////////////////ENUM///////////////////////////////////////////////////////////////////////////

//consider this code

enum Color {
    Red,
    Green,
    Blue
}

let myColor: Color = Color.Red; //if blue value will be 2
console.log(myColor); // Outputs: 0


/* Enums provide a way to work with symbolic names for constant values, making the code more 
expressive and less error-prone compared to using raw numeric or string literals. */

//you can also write like this
enum xColor {
    Red = 10,
    Green,
    Blue
}

let xmyColor: Color = Color.Red;
console.log(myColor); // Outputs: 10

//if we give red=10 and blue=20 , green valuewill be still 11, because it follow the top value