function getDrinkByProfession(param){  
    switch(param.toLowerCase()){
        case "jabroni":
            return "Patron Tequila"
        case "school counselor":
            return "Anything with Alcohol"
        case "programmer":
            return "Hipster Craft Beer"
        case "bike gang member":
            return "Moonshine"
        case "politician":
            return "Your tax dollars"
        case "rapper":
            return "Cristal"
        default:
            return "Beer"
    }
}

//****PREP****//

//Parameter//
//strings, precise words but can have mixed capitilization
//Return//
//string, precise string for recieved string
//
//
//Examples//
//if Jabroni or JAbrOni == Patron Tequila
//if School Counseler or scHOOl counselor == Anything with alcohol
//
//
//Pseudo code//
//a switch statement or object (key value pair) to match the
//input and return desired output
//
//
//
//

console.log(getDrinkByProfession("jabrOni"), "==Patron Tequila");
console.log(getDrinkByProfession("scHOOl counselor"), "==Anything with Alcohol");
console.log(getDrinkByProfession("prOgramMer"), "==Hipster Craft Beer");
console.log(getDrinkByProfession("bike ganG member"), "==Moonshine");
console.log(getDrinkByProfession("poLiTiCian"), "==Your tax dollars");
console.log(getDrinkByProfession("rapper"), "==Cristal");
console.log(getDrinkByProfession("pundit"), "==Beer");
console.log(getDrinkByProfession("Pug"), "==Beer");

