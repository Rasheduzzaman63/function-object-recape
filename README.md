# function-object-recape

Module 16:
Variable changeable. Variable cant be any keywork.
// variable can not any keyword.
var false="yes";
// variable name is not space
var my name="rashed";
//variable name has not any quation
var "age"=50;
 
// variable name not starts with  number but ends with number
var 99name="Rashed";
var name99="Rashed";
 
 
 
user_home_address="Nilphamari";  //snake case
userHomeAddress="Domar";           //camelcase
UserHomeAddress="Chilahati";   //Pascall case
 
 
// variable name is case sensative
 

Javascript a shonkha eksathe  jog (+)kora jay but string shudhu eksathe jora lagano jay. String must stay in cottesition.  var price1=”31” (string).




Module 17:
array.length: array ar sonkha jana jay. Array position start with 0. Index diye array ar upadan access kora jay.

Get elements by index:
var firendsAges =[25, 23, 28, 27, 32, 40];
var element = firendsAges[4];
console.log(element);
 
 
Eta ekta element k ber korar niyom.

Set elements by index:
var firendsAges =[25, 23, 28, 27, 32, 40];
firendsAges[2]=75;
console.log(firendsAges);
Eta diye ekta element ar jaygay r ekta elements k replace kora jay.


Push array ar shese notun upadan jog kore array ar notun length kore prokash kore. 

var numbers =[58, 67, 95, 42, 93];
console.log(numbers);
var popElement=numbers.pop();
console.log(popElement);

Je element k pop kora hoyece setake pawar jonno ekta variable niye setake console.log dile sei element  k paoya jabe.

At first kono element k add korte hole array.unshift(), and first theke remove korte hole array.shift().




Module 18:
The strict equality operator ( === ) checks whether its two operands are equal, returning a Boolean result.
While loop:
Ekta condition jeta protibar loop cholar age ekbar kore check kore. While loop ar man na change na korle seta infinite hoye cholte thakbe.

For Loop:
initialization hocce loop ar jonno ekta variable declare kora. Eta loop start hoyar somoy ekbar execute hobe. Condition every bar loop execute hoyar age loop abar execute hobe ki na seta check kore. Final execution ar sahajje everybar iteration ar por ekbar kore loop ar variable ar value increase or decrease kora hoy.

Break:
Break statement condition ti true hoyar por program totally bondo hoye jabe.

Continue: 
continue holo etar porer onsho gulo skip kora.





Module 19:
Function:
Function holo koyek line code ar somosti, jeta spacific kono ekta kaj sompadan kore.funciton start korar surute function keyword use kora hoy then function ar name likhte hoy. Function ar name gulote letter, digit , underscore and dollar sign thakte pare.ekta function ar code ekbar likhte tarpor jotobar icce totobar setake call kora jay. Parametter holo ekprokar speacial variable . jokhon function call kora hobe tokhon er man set hoye jabe. Return ar por ja likha thakbe setar man value hisabe return pawoa jabe.kono function k jekhan theke call kora hobe setar bampashe kono variable thakle oi function ar return ar por ja likha thakbe, setar value hoye jabe oi variable ar value.


Object:
Object holo ekta variable ja onek gulo value dharon korte pare. Ekti object multiple line a likha hoy. Boishisto gulo k bola hoy object properity  r tar value gulo k value bola hoy. Object ar modhe protiti key value  zora k koma diye alada kora hoy. Object.properity name ekta object ar properity k access kore. Properity k keys o bola hoy.

When you know the specific properity name, use dot notation to get the specific value.

 
var shoppingCard = {
    book:5,
    sunglass:1,
    keyboard:3,
    mouse:1,
    pen:28
}
// display all proporities
// console.log(shoppingCard)
 
 
// display sunglass value
// var sunglassValue = shoppingCard.sunglass;
// console.log(sunglassValue)
 
 
// alternative
// var sunglassValue = shoppingCard['sunglass']
// console.log(sunglassValue)
 
 
// display properity names and valuess eksathe
// var properityName = Object.keys(shoppingCard);
// var properityValue = Object.values(shoppingCard);
// console.log( properityName, properityValue);
 
 
// set the value
// console.log(shoppingCard)   // before set the value
// shoppingCard.mouse=12;
// console.log(shoppingCard)     //after set the value.
 
// // or
// shoppingCard['mouse']=20;
// console.log(shoppingCard)
 
// or
// shoppingCard[properityName]='mouse'
// console.log(shoppingCard)





Module 20:
Value of var is changeable but const value not change. Je variable ar value change hobe se gulo k loop ar vitor rakha jabe na. Rakhle se gulor value every loop cholar por 0(zero) set hobe.

Factorial: factorial holo 1 - oi number projonto multipication. 4! = 1*2*3*4








