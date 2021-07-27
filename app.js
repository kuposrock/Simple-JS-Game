const readlineSync = require('readline-sync');

var isAlive = true;
var hasKey = false;
var containsKey = Math.random()*100+1;
var response ="yes";

console.log(containsKey);
while(response =="yes"){
while(isAlive){
    containsKey = Math.random()*100+1;
var response2 = readlineSync.question("1.Look for key, 2. Try to open door, 3. Reach and in hole.");
switch(response2){
    case '1':
        isAlive = false;
        if(containsKey)
        break;
    case '2':

        break;
    case '3':

        break;

}
}
response = readlineSync.question("It looks like you died do you want to play again?: ")
}