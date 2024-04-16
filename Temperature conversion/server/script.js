var displayinpu=document.getElementById('displayinput')
var check1=document.getElementById('checkbox1')
var check2=document.getElementById('checkbox2')
var finaloutput=document.getElementById('final_output')

function output(){
    var display=Number(displayinpu.value)
    try {
        
            if(check1.checked){
               finaloutput.value=(display*9/5)+32+"°F"
            } 
            else if(check2.checked){
               finaloutput.value=(display-32)*5/9+'°C'
            }  
            else{
               alert('Click Your Temperature Conversion')
            }
        
    } catch (error) {
        alert('hi')
        
    }
   
   
   
}