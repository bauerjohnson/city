var numfield1 = document.getElementById("numfield1");
var numfield2 = document.getElementById("numfield2");
var form = document.getElementById("formu");

form.addEventListener('submit', function(){
if(!numfield1.value || !numfield2.value){
alert("enter value");
}
else
    {
    var x = parseFloat(numfield1.value);
    var y = parseFloat(numfield2.value);
    
     alert(x + y);
    
    }
});                    