const spanicon = document.getElementById('visibility');
// Change the type of input to password or text
function Toggle() {
   var temp = document.getElementById("typepass");
   if (temp.type === "password") {
       temp.type = "text";
       spanicon.textContent = 'visibility_off';
       spanicon.className = 'show';
   }
   else {
       temp.type = "password";
       spanicon.textContent = 'visibility';
       spanicon.className = 'hide';
   }
}