/**
 * toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
 * toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
 */
function toCamelCase(str){
    const wordArray=str.split(/[_||-]/g)
    let withoutCamelCase=wordArray.join(' ');
    
    return withoutCamelCase.replace(/\W+(.)/g,function(match,chr){
        //console.log(chr)
        return chr.toUpperCase()
    })   
}

console.log(toCamelCase('A-B-C'))