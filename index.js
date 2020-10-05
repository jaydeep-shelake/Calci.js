console.log('calculator');

const screen = document.getElementById('screen');
let screenValue="";



let buttons = document.querySelectorAll('button');
for(let keys of buttons){
    keys.addEventListener('click',(e)=>{
        let buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=='x'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
            
        }
         else if(buttonText=='C'){
             screenValue="";
            screen.value=screenValue;
         }
         else if(buttonText=='='){
           screen.value=eval(screenValue)
         }
         else{
             screenValue+=buttonText;
             screen.value=screenValue
         }
    })
}


