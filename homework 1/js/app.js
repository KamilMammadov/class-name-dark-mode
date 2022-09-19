
var modes=document.getElementById('modes')


function btn(){
    
    var text=document.getElementById('input').value;
    
    var number = text.slice(-3,-2);
    
    if (number==3) {
        document.getElementById('text').innerHTML =text
        document.getElementById('text').style.color="black"
        
   
    }
    else if (number==2) {
        document.getElementById('text').innerHTML =text
        document.getElementById('text').style.color="red"
    }
    else if (number==1) {
        document.getElementById('text').innerHTML =text
        document.getElementById('text').style.color="yellow"
    }
    else{
        document.getElementById('text').innerHTML ='CLASS NOT FOUND'
    }
}

function mode(){
    
    if(document.body.style.backgroundColor=='white')
    {
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
        modes.innerHTML='white mode'
        var text=document.getElementById('input').value;
    
        var number = text.slice(-3,-2);
       if (number==3) {
        document.getElementById('text').style.color="white"
       }

    }      
    else if(document.body.style.backgroundColor='black')
    {
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
        modes.innerHTML='black mode'
        var text=document.getElementById('input').value;
    
        var number = text.slice(-3,-2);
       if (number==3) {
        document.getElementById('text').style.color="black"

    }
    }
}
