//funkcija koja za parametar uzima string, vraća drugu polovicu stringa
var string1 = 'Javascript i nije tolko los';

function returnString(str){
    return str.slice(13);
}

console.log(string1);
console.log(returnString(string1));