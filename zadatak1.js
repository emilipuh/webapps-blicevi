//funkcija uzima array object
var array = [
    {'1':'A'},
    {'1':'C', '2':'A'}, 
    {'2':'C'}];
var keys = ['1','2'];
for (var value of Object.values(array)){
    console.log(value);
}


