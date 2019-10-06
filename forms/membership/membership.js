/* Now go the the form 'membership', uncomment it, 
and complete the design side and code so that it tells 
the user if they are a member or not. If they are a member, 
add their name to the membership array.
**** Remember, Use controls for all messages 
(no alerts nor console.log). You may have to add controls, 
events, and/or event handlers.
*/

var members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnSubmit2.onclick=function(){
  firstName = inptFirstName.value 
  if ((members.includes(firstName))
    NSB.MsgBox("You are a member!")
  else
    members.push(firstName)
}
    
