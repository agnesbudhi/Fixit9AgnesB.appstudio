/* Create a new form named calculator. It will let the user get the answer 
from adding or multiplying the two numbers, or clear the answer display.

The program must use at least one button, label, and input control.
The onlick event must be used. Other events can also be used, as desired.
The program may not use any alerts or console.log for output.
All output must be done using a label or other control.
All input must preface with the users' name.
Use the control properties to specify how the control should look.
The user must be able to clear the old calculation and do another as many times as s/he likes.
*/

var firstNum = ""
var secondNum = ""

btnAdd.onclick=function(){
  firstNum = Number(inptFirstNum.value)
  secondNum = Number(inptSecNum.value)
  lblAnswer1.value = firstNum + secondNum
}

btnMult.onclick=function(){
  firstNum = Number(inptFirstNum.value)
  secondNum = Number(inptSecNum.value)
  lblAnswer1.value = firstNum * secondNum
}

btnClear.onclick=function(){
  firstNum = ""
  secondNum = ""
  lblAnswer1.value = "Your calculations have been cleared."
}